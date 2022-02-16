package content

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"

	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/git"
)

func NewFetcher(dir string) Fetcher {
	return Fetcher{
		dir: dir,
	}
}

type Fetcher struct {
	dir string
}

func (f Fetcher) Fetch(content *testkube.ScriptContent) (path string, err error) {
	if content == nil {
		return "", fmt.Errorf("fetch - empty content, make sure script content has valid data structure and is not nil")
	}
	switch testkube.ScriptContentType(content.Type_) {
	case testkube.ScriptContentTypeFileURI:
		return f.FetchURI(content.Uri)
	case testkube.ScriptContentTypeString:
		return f.FetchString(content.Data)
	case testkube.ScriptContentTypeGitFile:
		return f.FetchGitFile(content.Repository)
	case testkube.ScriptContentTypeGitDir:
		return f.FetchGitDir(content.Repository)
	default:
		return path, fmt.Errorf("unhandled content type: '%s'", content.Type_)
	}
}

// FetchString stores string content as file
func (f Fetcher) FetchString(str string) (path string, err error) {
	return f.saveTempFile(strings.NewReader(str))
}

//FetchURI stores uri as local file
func (f Fetcher) FetchURI(uri string) (path string, err error) {
	resp, err := http.Get(uri)
	if err != nil {
		return path, err
	}
	defer resp.Body.Close()

	return f.saveTempFile(resp.Body)
}

// FetchGitDir returns path to locally checked out git repo with partial path
func (f Fetcher) FetchGitDir(repo *testkube.Repository) (path string, err error) {
	uri, err := f.gitURI(repo)
	if err != nil {
		return path, err
	}

	// if path not set make full repo checkout
	if repo.Path == "" {
		return git.Checkout(uri, repo.Branch, f.dir)
	}

	return git.PartialCheckout(uri, repo.Path, repo.Branch, f.dir)
}

// FetchGitFile returns path to git based file saved in local temp directory
func (f Fetcher) FetchGitFile(repo *testkube.Repository) (path string, err error) {
	uri, err := f.gitURI(repo)
	if err != nil {
		return path, err
	}

	repoPath, err := git.Checkout(uri, repo.Branch, f.dir)
	if err != nil {
		return path, err
	}

	// get git file
	return filepath.Join(repoPath, repo.Path), nil
}

// gitUri merge creds with git uri
func (f Fetcher) gitURI(repo *testkube.Repository) (uri string, err error) {
	if repo.Username != "" && repo.Token != "" {
		gitURI, err := url.Parse(repo.Uri)
		if err != nil {
			return uri, err
		}

		gitURI.User = url.UserPassword(repo.Username, repo.Token)
		return gitURI.String(), nil
	}

	return repo.Uri, nil
}

func (f Fetcher) saveTempFile(reader io.Reader) (path string, err error) {
	var tmpFile *os.File
	filename := "fetcher-save-temp-file"
	if f.dir == "" {
		tmpFile, err = ioutil.TempFile("", filename)
	} else {
		tmpFile, err = os.Create(filepath.Join(f.dir, filename))
	}
	if err != nil {
		return "", err
	}
	defer tmpFile.Close()
	_, err = io.Copy(tmpFile, reader)

	return tmpFile.Name(), err
}
