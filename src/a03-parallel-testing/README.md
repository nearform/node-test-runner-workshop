# a03-parallel-testing

- Open the file `src/index.js`.

- There are 2 function `heavyComputationSum`, `heavyComputationMultiply`.

- These function take a long time to execute.

- Run in the terminal `node --test --test-concurrency=1`.

- It takes a long time because tests are executed one by one.

- Run in the terminal `node -e "console.log(os.availableParallelism())"`.

- Increase the number of `--test-concurrency=` by the value from the previous command.

- Watch speed increase drastically.

- By default Node uses `os.availableParallelism() -1`.
