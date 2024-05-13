// Copyright 2024 Testkube.
//
// Licensed as a Testkube Pro file under the Testkube Community
// License (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
//	https://github.com/kubeshop/testkube/blob/main/licenses/TCL.txt

package common

import (
	"archive/tar"
	"compress/gzip"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"

	"github.com/pkg/errors"
)

var (
	relativeCheckRe = regexp.MustCompile(`(^|/)\.\.(/|$)`)
)

func UnpackTarball(dirPath string, stream io.ReadCloser) error {
	defer stream.Close()

	// Process the files
	uncompressedStream, err := gzip.NewReader(stream)
	if err != nil {
		return errors.Wrap(err, "start reading gzip")
	}
	tarReader := tar.NewReader(uncompressedStream)

	// Unpack them
	for {
		header, err := tarReader.Next()
		if err == io.EOF {
			break
		}
		if err != nil {
			return errors.Wrap(err, "get next entry from tarball")
		}
		if filepath.IsAbs(header.Name) || relativeCheckRe.MatchString(filepath.ToSlash(header.Name)) {
			return fmt.Errorf("unsafe file path in the tarball: %s", header.Name)
		}

		filePath := filepath.Join(dirPath, header.Name)

		switch header.Typeflag {
		case tar.TypeDir:
			err := os.Mkdir(filePath, 0755)
			if err != nil {
				return errors.Wrapf(err, "%s: create directory", filePath)
			}
		case tar.TypeReg:
			err := os.MkdirAll(filepath.Dir(filePath), 0755)
			if err != nil {
				return errors.Wrapf(err, "%s: create directory tree", filePath)
			}
			outFile, err := os.OpenFile(filePath, os.O_CREATE|os.O_RDWR|os.O_TRUNC, os.FileMode(header.Mode))
			if err != nil {
				return errors.Wrapf(err, "%s: create file", filePath)
			}
			_, err = io.Copy(outFile, tarReader)
			if err != nil {
				_ = outFile.Close()
				return errors.Wrapf(err, "%s: write file", filePath)
			}
			_ = outFile.Close()
		case tar.TypeSymlink:
			err := os.MkdirAll(filepath.Dir(filePath), 0755)
			if err != nil {
				return errors.Wrapf(err, "%s: create directory tree", filePath)
			}
			err = os.Symlink(header.Linkname, filePath)
			if err != nil {
				return errors.Wrapf(err, "%s: create symlink", filePath)
			}
		default:
			return fmt.Errorf("unknown entry type in the transferred archive: '%x' in %s", header.Typeflag, filePath)
		}
	}
	return nil
}
