# a01-filtering

- Open the file `src/index.js`.

- There are 3 function `sum`, `average`, `product` from previous exercise.

- The test folder is in a custom location `test-folder-custom`.

- Run in the terminal `node --test`.

- It's not executing any test because it can't find our custom location.

- Watch the file `./test-folder-custom/index.spec.js` has the `.spec`
  extension that the test runner does not recognize.

- There are 3 simple tests name after the functions we want to test.

- Also we want to run only the test that contain the name `product`.

- 💡 When running `node --test` use the flag `--test-name-pattern` and specificy the folder and extension file.
