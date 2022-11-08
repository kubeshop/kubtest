package content

// import (
// 	"os"
// 	"testing"

// 	"github.com/stretchr/testify/assert"
// )

// func TestPlaceFiles(t *testing.T) {
// 	t.Run("Run with one file", func(t *testing.T) {
// 		files := map[string]string{
// 			"/tmp/TestPlaceFiles_file1": "file1",
// 		}

// 		err := PlaceFiles(files)
// 		assert.NoError(t, err)
// 		defer cleanup(t, files)

// 		for file := range files {
// 			_, err = os.Stat(file)
// 			assert.NoError(t, err)
// 		}
// 	})

// 	t.Run("Run with no file", func(t *testing.T) {
// 		files := map[string]string{}
// 		err := PlaceFiles(files)
// 		assert.NoError(t, err)
// 		defer cleanup(t, files)

// 		for file := range files {
// 			_, err = os.Stat(file)
// 			assert.NoError(t, err)
// 		}
// 	})

// 	t.Run("Run with multiple files", func(t *testing.T) {
// 		files := map[string]string{
// 			"/tmp/TestPlaceFiles_file2": "file2",
// 			"/tmp/TestPlaceFiles_file3": "file3",
// 			"/tmp/TestPlaceFiles_file4": "file4",
// 		}

// 		err := PlaceFiles(files)
// 		assert.NoError(t, err)
// 		defer cleanup(t, files)

// 		for file := range files {
// 			_, err = os.Stat(file)
// 			assert.NoError(t, err)
// 		}
// 	})
// }

// func cleanup(t *testing.T, files map[string]string) {
// 	for file := range files {
// 		err := os.Remove(file)
// 		assert.NoError(t, err)
// 	}
// }
