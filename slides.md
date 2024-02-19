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

<div class="dense">

- Test runners are tools designed to execute your test suites and report the results. They are essential in automating the testing process.
- Python: `pytest` is widely appreciated for its powerful features and simple syntax, making it suitable for both simple and complex projects.
- Java: `JUnit` is the de facto standard for unit testing in Java development, known for its rich annotation-based configuration.
- JavaScript: `Jest` is a flexible test framework with a focus on asynchronous testing, offering rich features for running tests in Node.js and the browser.
- .NET: `NUnit` is a popular choice for .NET developers, similar to JUnit but with a focus on the .NET framework.
</div>

Choosing the right test runner involves considering the programming language, project complexity, and specific requirements.

---

# Test runner VS Testing Framework

<div class="dense">

- Test Runner: A tool that executes tests and reports the results. It is responsible for loading your test code, running it, and then providing feedback.
- Testing Framework: Provides the structure and guidelines for writing tests. It includes assertions, test cases, and test suites, but doesn't run tests by itself.
- The main difference lies in their roles; while a testing framework defines how to write tests, a test runner actually executes them.
- Some tools, like `pytest` and `Jest`, combine both functionalities, acting as both test runners and frameworks.
</div>

---

# Why Node.js decided to ship its own test runner?

<div class="dense">

- Integration: Built-in support for testing within the Node.js ecosystem simplifies setup and configuration for developers.
- Standardization: Aims to provide a standard testing solution that leverages Node.js features and best practices.
- Performance: Optimized for the Node.js environment, it can offer better performance and efficiency for JavaScript projects.
- Features: Tailored to meet the specific needs of Node.js developers, incorporating feedback and evolving with the platform.
</div>

---

# Workshop setup

- This workshop will introduce to the Node.js test runner with a series of exercises
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
  assert.deepStrictEqual(sum([1, 2, 3]), 6)
  assert.ok(typeof sum([1, 2, 3]) === 'number')
  assert.doesNotThrow(() => sum([]), 0)
  assert.deepStrictEqual(sum([]), 0)
  assert.throws(() => sum('abc'), {
    message: 'Input must be an array of numbers'
  })
})
```

---

# A02 Solution 💡 (2)

```javascript
test('sumAsync', async () => {
  assert.deepStrictEqual(await sumAsync([1, 2, 3]), 6)
  assert.ok(typeof (await sumAsync([1, 2, 3])) === 'number')
  await assert.doesNotReject(() => sumAsync([]), 0)
  assert.deepStrictEqual(await sumAsync([]), 0)
  await assert.rejects(() => sumAsync('abc'), {
    message: 'Input must be an array of numbers'
  })
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

# A04 Context

<div class="dense">

- The `context` object is essential for managing test lifecycles, including setup and teardown processes.
- It provides hooks (`before`, `beforeEach`, `after`, `afterEach`) for preparing and cleaning up before and after tests or a group of tests.
- Enables control over test execution through methods like `skip` (to bypass tests), `todo` (to mark tests as pending), and `runOnly` (to execute only specified tests).
- Offers a `diagnostic` method for logging debug information and a signal property for aborting tests programmatically.
- Supports **hierarchical test structuring** with the test method, allowing for the creation of subtests that inherit the context of their parent test.
- Facilitates grouping related tests by using `beforeEach` and `afterEach` hooks for shared setup and cleanup, ensuring a well-organized and maintainable test suite.

</div>

---

# A04 The problem

- In this exercise about context, we will focus on child tests (also known as subtests)
- In the file `index.test.js` you will find multiple tests for the `sum` and the `average` functions
- Group together all the subtests related to the same function using the `describe` function

---

# A04 Solution 💡

```javascript
// Grouping tests for `sum` function
describe('sum function tests', () => {
  test('Sum works correctly with valid input', () => {
    assert.deepStrictEqual(sum([1, 2, 3]), 6)
  })

  test('Sum returns 0 in case of empty array', () => {
    assert.deepStrictEqual(sum([]), 0)
  })

  test('Sum throws in case of bad input', () => {
    assert.throws(() => sum('abc'), {
      message: 'Input must be an array of numbers'
    })
  })
})
```

---

# A04 Solution 💡 (2)

```javascript
// Grouping tests for `average` function
describe('average function tests', () => {
  test('Average works correctly with valid input', () => {
    assert.deepStrictEqual(average([1, 2, 3]), 2)
  })

  test('Average returns 0 in case of empty array', () => {
    assert.deepStrictEqual(average([]), 0)
  })

  test('Average throws in case of bad input', () => {
    assert.throws(() => average('abc'), {
      message: 'Input must be an array of numbers'
    })
  })
})
```

---

# A05 Hooks

<div class="dense">

Lifecycle hooks (`before`, `after`, `beforeEach`, `afterEach`) play a crucial role in setting up and tearing down test environments, leading to more organized and efficient test suites.

Proper use of hooks can improve code readability and maintenance by centralizing setup and cleanup logic.

They help in managing resources efficiently, such as database connections and user records, which is crucial for tests that interact with **external systems or databases**.

</div>

---

# A05 The problem

<div class="dense">

- Consider a test suite with multiple tests that interact with a database and require user setup.
- Manually handling database connections and user setup/teardown in each test is repetitive and clutters the test code.
- This approach increases the risk of errors, such as forgetting to release resources, leading to **resource leaks** and **interference** between tests.
</div>

We want to change the `index.test.js` code to use the proper **lifecycle hooks**

---

# A05 Solution 💡

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

# A05 Solution 💡 (2)

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
    assert.strictEqual(result, true)
    // No user cleanup
  })
})

// No need for explicit database connection cleanup
```

---

# A06 Keywords

<div class="dense">

- Utilizing special keywords such as only, todo, and skip in test suites can significantly enhance test management and execution efficiency.
- `only`: Focuses on running a specific test or group of tests, useful for debugging or developing new features.
- `todo`: Marks tests as planned but not yet implemented, allowing for better test suite planning without breaking the execution.
- `skip`: Excludes tests from the execution run, useful for temporarily disabling tests without removing the test code.
</div>

---

# A06 The problem

<div class="dense">

- During development and testing phases, it's common to encounter scenarios where certain tests need to be prioritized, postponed, or temporarily disabled.
- Manually commenting out tests or altering test code to adjust the execution can be cumbersome and error-prone.
- In the `index.test.js` we have 4 tests. Based on the requirements written in the test file, apply the correct keywords yo apply the required behaviour
</div>

---

# A06 Solution 💡

```javascript
// the function product is not ready yet will throw, so we skip
skip('testing product', () => {
  assert.strictEqual(product([1, 2, 3]), 6)
})

// we want to execute ONLY this specific test
only('testing sum', () => {
  assert.strictEqual(sum([1, 2, 27]), 30)
})

// this test is not meaningful, it still wip
todo('still work in progress', () => {
  assert.strictEqual(2, 2)
})

// this runs normally
test('should run normally', () => {
  assert.strictEqual(sum([1, 2, 3]), 6)
})
```

---

# A07 Mocks

- **Mocking** is a powerful testing technique that involves creating a fake version of a function or module to track its usage and control its behavior during tests.
- It's particularly useful for isolating test environments, monitoring how functions are used, and testing the interactions between different parts of an application without relying on external resources or complex setups.
- The `mock` function from `node:test` provides a simple interface to **spy on, stub, or replace the behavior of the target function**.

---

# A07 The problem

<div class="dense">

- When testing functions that interact with external systems or have side effects, directly invoking them can lead to unpredictable test outcomes and slow test execution.
- It's challenging to test the behavior of a function in isolation without an efficient way to track its invocations, arguments, and return values.

- Open the file `test/index.test.js`.
- Use function `mock` from `node:test` to spy on the fuction `sum` invokation.
</div>

---

# A07 Fixing it 🪄

- Utilize the `mock` function to create a **spy version** of the sum function. This allows you to monitor its calls during the test execution.
- The mock function provides detailed insights into each invocation, such as the arguments used, the return value, and any errors thrown.
- This approach enables precise control and observation over function behavior in test scenarios, improving test reliability and insightfulness.

---

# A07 Solution 💡

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

# A08 Timers

<div class="dense">

- Timers are crucial for testing **time-dependent functionality** in applications, such as debouncing, throttling, or any operation that relies on time delays.
- Using real timers in tests can lead to unpredictable results and slow down the testing process, as tests have to wait for the actual time to pass.
- The Node.js test runner offers a way to **mock timers**, enabling tests to simulate the passage of time instantly.
- Developers can enable mocked versions of timers like `setTimeout` and `setInterval` that can be controlled programmatically.

</div>

---

# A08 The problem

- In the `test` folder, there is a `index.test.js` file
- The function to test, contains a `setTimeout`
- During testing, this can lead to slow and unpredictable tests
- Apply [timers mocking](https://nodejs.org/api/test.html#timers) in the test file

---

# A08 Solution 💡

```javascript
test('delayedHello executes the callback after the specified delay', () => {
  const fn = mock.fn()

  mock.timers.enable({ apis: ['setTimeout'] })
  delayedHello(fn, 5000)

  // Initially, the callback has not been called
  assert.strictEqual(fn.mock.calls.length, 0)
  // Advance time by 5000 milliseconds
  mock.timers.tick(5000)
  // Now, the callback should have been called once
  assert.strictEqual(fn.mock.calls.length, 1)
  assert.strictEqual(fn.mock.calls[0][0], 'Hello, World!')

  mock.timers.reset()
})
```

---

# A09 Dates

- The **mock timers API** also allows the mocking of the `Date` object.
- This is a useful feature for testing time-dependent functionality, or to simulate internal calendar functions such as `Date.now()`.
- Dates and timers are dependent when mocked together. This means that if you have both the `Date` and `setTimeout` mocked, advancing the time will also advance the mocked date as they simulate a single internal clock.

---

# A09 The problem

- Enable the mocking of the `Date` object.
- Set the time to `2024-02-19T00:00:00Z` and verify that the time returned from the `getCurrentFormattedDate` is correct
- Use `setTime` to change the time to `2025-12-25T00:00:00Z` and verify that the formatted time is still correct

---

# A09 Solution 💡

```javascript
test('getCurrentFormattedDate returns the correct format', () => {
  // Mock Date to a specific timestamp
  mock.timers.enable({
    apis: ['Date'],
    now: new Date('2024-02-19T00:00:00Z').getTime()
  })

  // Test the function with the mocked date
  assert.strictEqual(getCurrentFormattedDate(), '2024-02-19')

  // Advance time to another specific date
  mock.timers.setTime(new Date('2025-12-25T00:00:00Z').getTime())

  // Test the function again with the new mocked date
  assert.strictEqual(getCurrentFormattedDate(), '2025-12-25')
})
```

---

# A10 Reporter

<div class="dense">

- Reporters are tools used with test runners to format and present test execution results.
- They transform raw test output into readable and structured formats for easier interpretation.
- Common output formats include text, HTML, and JSON.
- Helps developers quickly **identify test outcomes**, including successes and failures.
- The Node.js test runner offers 4 default reporters: `spec`, `dot`, `tap`, `junit`
</div>

---

# A10 The problem

- Test the default reporters by running in the terminal `node --test --test-reporter=` for each of them.
- Let's create our custom reporter.
- Open the file `test/reporter/index.reporter.js`.
- Return 🐛 on failure and 🍾 on pass.
- Run in the terminal `node --test --test-reporter=./test/reporter/index.reporter.js` to check the output.

---

# A10 Solution 💡

```javascript
const success = '🍾'
const fail = '🐛'

export default async function* reporter(source) {
  for await (const event of source) {
    switch (event.type) {
      case 'test:pass':
        yield success
        break
      case 'test:fail':
        yield fail
        break
      default:
        break
    }
  }
}
```

---

# A11 Typescript

<div class="dense">

- The Node.js test runner brings Typescript compatibility using `tsx` or `ts-node`
- You can run it only by using the `--import` flag.
- This feature allows the tests to be written in Typescript and to run them directly
- The flag allows to preload the specified module at startup. If the flag is provided several times, each module will be executed sequentially in the order they appear, starting with the ones provided in `NODE_OPTIONS`.
- Warning: This feature is still **Experimental**

</div>

---

# A11 The problem

- In the `test` folder, there is a `index.test.ts` file
- Run the test with the test runner using tsx by leveraging the `import` flag

---

# A11 Solution 💡

```bash
    node --import=tsx --test ./test/*.ts
```

You can reference the [`--import` official documentation](https://nodejs.org/api/cli.html#--importmodule) for further information

---

# A12 Coverage

- Test coverage quantifies the percentage of the source code that has been tested, helping developers identify untested parts of a codebase.
- There are multiple types of **Test Coverage**: Statement Coverage, Function Coverage, Condition Coverage, Line Coverage

---

# A12 The problem

- Run in the terminal `node --test --experimental-test-coverage`.
- Watch the coverage not being 100%.
- Make converage 100%.

---

# A12 Solution 💡

```javascript
test('sum', () => {
  assert.deepStrictEqual(sum([1, 2, 3]), 6)
  assert.deepStrictEqual(sum([]), 0)
  assert.throws(() => sum('abc'), {
    message: 'Input must be an array of numbers'
  })
})

test('product', () => {
  assert.strictEqual(product([2, 3, 4]), 24)
  assert.throws(() => product('abc'), {
    message: 'Input must be an array of numbers'
  })
})
```

---

# A12 Solution 💡 (2)

```javascript
test('average', () => {
  assert.strictEqual(average([]), 0)
  assert.deepStrictEqual(average([1, 3]), 2)
  assert.throws(() => average(null), {
    message: 'Input must be an array of numbers'
  })
})
```

---

# A13 Watch

<div class="dense">

- Running an entire test suite after each change can be frustrating.
- The test runner offers a **watch mode** to address this.
- In watch mode, the test runner will watch for changes to test files and their dependencies.
- When a change is detected, the test runner will rerun the tests affected by the change
- The test runner will continue to run until the process is terminated.
- In order to start the test runner in watch mode you can use the `--watch` flag.

</div>

---

# A13 The problem

- Open `test/index.test.js`.

- Run in the terminal `node --test --watch`.

- Watch test being executed while editing the file.

---

# Other useful resources

---

# Thanks For Having Us!

## 👏👏👏
