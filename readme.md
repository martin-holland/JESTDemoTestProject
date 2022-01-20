# JEST Project

Documentation: https://jestjs.io/docs/getting-started

## 1. Create a project Folder

## 2. Create package.json (with npm init or manually)

```shell
> npm init -y
```

or

```shell
> npm init
```

and answer the questions

## 3. Install JEST as devDependency

Remember: It will work if its not --save-dev but it will show in the final product of the project. It just adds weight to the project that is not needed.

```shell
> npm install jest --save-dev
```

## 4. Modify test-script in package.json

```json
"scripts": {
    "test": "jest"
}
```

## 5. Create test folder named `__tests__`

NB: Be careful of double underscores.

## 6. Write tests

## 7. To run tests

```shell
> npm test
```

## 7b. To run only one test file

```shell
> npm test --testFile fileToBeTested.test.js
```

NB: Tests are not necessarily ran in the order they are written, they should be self contained so that are not relying on other tests.

You can use the 'test' syntax or 'it' syntax, both are valid for test case building.
