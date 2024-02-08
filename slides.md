---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/logo.png">

# Node.js Test Runner Workshop

<div class="copyright">

<Copyright />

</div>

---

# What’s a Test Runner?

A test runner is a tool that automates the process of executing tests in the development of software, ensuring that code changes do not break existing functionality.

It allows developers to run tests across different environments and conditions systematically.

Test runners can be part of a larger **test framework** or standalone tools.

---

# Usual features

<div class="dense">

- **Test Discovery:** Automatically detecting and running all test cases within specified directories or files.
- **Test Organization:** Allowing tests to be grouped, categorized, or tagged for selective execution.
- **Result Reporting:** Providing detailed reports on test outcomes, including successes, failures, and exceptions.
- **Integration Support:** Offering compatibility with Continuous Integration (CI) systems for automated testing within development pipelines.

</div>

---

# Poplular examples

Popular examples include `pytest` for Python, `JUnit` for Java, `Mocha` for JavaScript, and `NUnit` for .NET.

Choosing the right test runner depends on the programming language, the complexity of the project, and specific project requirements.

---

# Test runner VS Testing Framework

---

# Why are there so many test runners?

---

# Why Node.js decided to ship its own test runner?

---

# A brief introduction

---

# Features

---

# Workshop setup

- This workshop will introduce to the Node.js test runner with 11 excercises
- At each step you're asked to use a different test runner feature
- The 💡 icon indicates hints

---

# Getting setup

#### Requirements

- Node LTS

#### Setup

<br />

```bash
git clone https://github.com/nearform/node-test-runner-workshop
npm ci
```

---

# A00 A first example

- In this first example we will run a simple test suite
- The suite is composed of three tests, one for each function: `sum`, `product` and `average`

To run the test, open a new terminal in the `a00-example` directory and run `node --test`

---

# A01 Filtering

In the context of test runners, **filtering** refers to the ability to select which tests to run based on specific criteria. This can be useful in large codebases where running every test can be time-consuming.

Filtering allows developers to focus on tests that are relevant to the changes they are making, providing faster feedback and more efficient development workflows.

#### Key points:

<div class="dense">

- Selective Testing: Run only a subset of tests to save time and resources.
- Criteria Based: Tests can be filtered by names, tags, or custom patterns.
- Efficiency: Helps in focusing on newly introduced or modified tests.

</div>

---

# A01 The problem

When working with Node.js test runners, you might encounter situations where tests do not run as expected. A common issue arises when tests are placed in a custom directory or when they use a non-standard file extension that the test runner does not recognize by default.

<div class="dense">

- Test functions (`sum`, `average`, `product`) are located in `src/index.js`.
- Tests are placed in a custom location: `test-folder-custom`.
- The test runner is unable to find the tests due to the custom location and file extension `.spec.js` which it does not recognize.
- Running `node --test` does not execute any tests, leading to confusion and inefficiency.

</div>

This scenario highlights the need for a way to specify test locations and patterns to the test runner.

---

# A01 Fixing it 🪄

To address the issue of the test runner not finding tests in a custom location or with a specific file extension, Node.js provides a way to specify test name patterns and custom test directories.

1. Use the `--test-name-pattern` Flag: This flag allows you to specify a pattern for test names you wish to run, enabling the filtering of tests based on their names.

2. Specify the Folder and File Extension: Along with the `--test-name-pattern` flag, you can also specify the folder where your tests are located and the file extension they use. This ensures that the test runner can find and execute the tests correctly.

---

# A01 Solution 💡

Running this command will correctly run the `index.spec.js` file in the `test-folder-custom` directory

```bash
node --test --test-name-pattern=product ./test-folder-custom/*.spec.js
```

---

# A02 Assertions

Assertions are fundamental to testing in Node.js, serving as the building blocks for **validating code functionality**. They help ensure that your code behaves as expected under various conditions.

<div class="dense">

- Objective: Learn to use Node.js built-in assertions to test sum and sumAsync functions.
- Context: Functions are located in `src/index.js`, with tests in `./test/index.test.js`.
- Task: Write tests using the provided assertions, following the guidelines in the comments.

</div>
Understanding and implementing assertions correctly is key to developing robust tests for your applications.

---

# A02 The problem

<div class="dense">

- Import Necessary Modules: Begin by importing the assert and test modules, along with the functions to be tested.
- Write Test Cases: Follow the instructions and use assertions to validate the behavior of the functions
- Running Tests: Execute your tests using node --test to ensure your code meets the specified conditions.
- 💡 The assert syntax is similar to the example, you just need to customize it
</div>

---

# A02 Solution 💡

```javascript
test('sum', () => {
  assert.deepStrictEqual(sum([1, 2, 3]), 6, 'sum of [1, 2, 3] is 6')
  assert.ok(typeof sum([1, 2, 3]) === 'number', 'typeof sum return is number')
  assert.doesNotThrow(() => sum([]), 0, 'empty array is valid')
  assert.deepStrictEqual(sum([]), 0, 'sum of empty array is 0')
  assert.throws(
    () => sum('abc'),
    { message: 'Input must be an array of numbers' },
    'throws error for non-array input in sum'
  )
})
```

---

# A02 Solution 💡 (2)

```javascript
test('sumAsync', async () => {
  assert.deepStrictEqual(await sumAsync([1, 2, 3]), 6, 'sum of [1, 2, 3] is 6')
  assert.ok(
    typeof (await sumAsync([1, 2, 3])) === 'number',
    'typeof sum return is number'
  )
  await assert.doesNotReject(() => sumAsync([]), 0, 'empty array is valid')
  assert.deepStrictEqual(await sumAsync([]), 0, 'sum of empty array is 0')
  await assert.rejects(
    () => sumAsync('abc'),
    { message: 'Input must be an array of numbers' },
    'throws error for non-array input in sumAsync'
  )
})
```

---

# A02 Solution 💡(3)

There are other assertions not covered by this example, for example:

```javascript
assert.match('PLACEHOLDER', /PLACEHOLDER/)
assert.doesNotMatch('foo', /PLACEHOLDER/)
```

Refer to the [official documentation](https://nodejs.org/api/assert.html) for further information

---

# A03 Parallel testing

<div class="dense">

- Running tests in parallel can drastically reduce the time needed to execute extensive test suites, especially beneficial for long-running tests.
- Use `node -e "console.log(os.availableParallelism())"` to determine the maximum number of concurrent tasks supported, guiding the optimal setting for `--test-concurrency`.
- Node.js defaults to `os.availableParallelism() - 1` for parallel test execution, leaving one CPU core free. Increasing `--test-concurrency` can further speed up testing, depending on the workload and system capabilities.
- Tests involving heavy computations see the most benefit from parallel execution, making efficient use of available hardware resources.
</div>

---

# A03 The problem

In this example we have 2 function `heavyComputationSum`, `heavyComputationMultiply` that takes a long time to execute.

Running this snippet we can see a sequential execution in action:

```bash
node --test --test-concurrency=1
```

Your goal is to exploit parallel testing to make the execution faster.

---

# A03 Solution 💡

```bash
# Determine optimal concurrency
node -e "console.log(os.availableParallelism())"

# Example parallel execution (faster)
node --test --test-concurrency=10

```

---

# A04 Hooks

<div class="dense">

Lifecycle hooks (`before`, `after`, `beforeEach`, `afterEach`) play a crucial role in setting up and tearing down test environments, leading to more organized and efficient test suites.

Proper use of hooks can improve code readability and maintenance by centralizing setup and cleanup logic.

They help in managing resources efficiently, such as database connections and user records, which is crucial for tests that interact with **external systems or databases**.

</div>

---

# A04 The problem

<div class="dense">

- Consider a test suite with multiple tests that interact with a database and require user setup.
- Manually handling database connections and user setup/teardown in each test is repetitive and clutters the test code.
- This approach increases the risk of errors, such as forgetting to release resources, leading to **resource leaks** and **interference** between tests.
</div>

We want to change the `index.test.js` code to use the proper **lifecycle hooks**

---

# A04 Solution 💡

```javascript
let databaseConnection
let user

before(async () => {
  databaseConnection = await connectToDatabase()
})

after(async () => {
  await closeDatabaseConnection(databaseConnection)
})

beforeEach(async () => {
  user = await createUser(databaseConnection, 'testuser', 'password123')
})

afterEach(async () => {
  await deleteUser(databaseConnection, user)
})
```

---

# A04 Solution 💡 (2)

```javascript
// No need for database connection here

test('Authentication Module Tests', async () => {
  await test('should authenticate a valid user', async () => {
    // No user creation
    const result = await authenticateUser(
      databaseConnection,
      'testuser',
      'password123'
    )
    assert.strictEqual(result, true, 'Authentication should succeed')
    // No user cleanup
  })
})

// No need for explicit database connection cleanup
```

---

# A05 Keywords

<div class="dense">

- Utilizing special keywords such as only, todo, and skip in test suites can significantly enhance test management and execution efficiency.
- `only`: Focuses on running a specific test or group of tests, useful for debugging or developing new features.
- `todo`: Marks tests as planned but not yet implemented, allowing for better test suite planning without breaking the execution.
- `skip`: Excludes tests from the execution run, useful for temporarily disabling tests without removing the test code.
</div>

---

# A05 The problem

<div class="dense">

- During development and testing phases, it's common to encounter scenarios where certain tests need to be prioritized, postponed, or temporarily disabled.
- Manually commenting out tests or altering test code to adjust the execution can be cumbersome and error-prone.
- In the `index.test.js` we have 4 tests. Based on the requirements written in the test file, apply the correct keywords yo apply the required behaviour
</div>

---

# A05 Solution 💡

```javascript
// the function product is not ready yet will throw, so we skip
skip('testing product', () => {
  assert.strictEqual(product([1, 2, 3]), 6, 'product is not ready yet')
})

// we want to execute ONLY this specific test
only('testing sum', () => {
  assert.strictEqual(sum([1, 2, 27]), 30, 'sum([1, 2, 27]) should equal 30')
})

// this test is not meaningful, it still wip
todo('still work in progress', () => {
  assert.strictEqual(2, 2, 'This testis still a work in progress')
})

// this runs normally
test('should run normally', () => {
  assert.strictEqual(sum([1, 2, 3]), 6, 'sum([1, 2, 3]) should run normally')
})
```

---

# A06 Mocks

- **Mocking** is a powerful testing technique that involves creating a fake version of a function or module to track its usage and control its behavior during tests.
- It's particularly useful for isolating test environments, monitoring how functions are used, and testing the interactions between different parts of an application without relying on external resources or complex setups.
- The `mock` function from `node:test` provides a simple interface to **spy on, stub, or replace the behavior of the target function**.

---

# A06 The problem

<div class="dense">

- When testing functions that interact with external systems or have side effects, directly invoking them can lead to unpredictable test outcomes and slow test execution.
- It's challenging to test the behavior of a function in isolation without an efficient way to track its invocations, arguments, and return values.

- Open the file `test/index.test.js`.
- Use function `mock` from `node:test` to spy on the fuction `sum` invokation.
</div>

---

# A06 Fixing it 🪄

- Utilize the `mock` function to create a **spy version** of the sum function. This allows you to monitor its calls during the test execution.
- The mock function provides detailed insights into each invocation, such as the arguments used, the return value, and any errors thrown.
- This approach enables precise control and observation over function behavior in test scenarios, improving test reliability and insightfulness.

---

# A06 Solution 💡

```javascript
afterEach(async () => {
  mock.reset()
})

test('spies on a sum', () => {
  const mockedSum = mock.fn(sum)

  assert.deepStrictEqual(mockedSum.mock.calls.length, 0)
  assert.deepStrictEqual(mockedSum([3, 4]), 7)
  assert.deepStrictEqual(mockedSum.mock.calls.length, 1)

  const call = mockedSum.mock.calls[0]
  assert.deepStrictEqual(call.arguments, [[3, 4]])
  assert.deepStrictEqual(call.result, 7)
  assert.deepStrictEqual(call.error, undefined)
})
```

Run `npm run test` to test your solution

---

# A07 Reporter

---

# A07 The problem

---

# A07 Solution 💡

---

# A08 Typescript

---

# A08 The problem

---

# A08 Solution 💡

---

# A09 Coverage

---

# A09 The problem

---

# A09 Solution 💡

---

# A10 Watch

---

# A10 The problem

---

# A10 Solution 💡

---

# Other useful resources

---

# Thanks For Having Us!

## 👏👏👏

````

```

```
````
