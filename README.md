TypeScript Webpack lit-html Jest + SWC Test Demo
=======================================

Write test for lit-html with jest.

```
npm install
npm run test
```

## Works fine with `ts-jest`

```
 PASS  src/sayHello.test.ts
  test
    ✓ is defined (48 ms)
    ✓ should trigger willUpdate when properties change (23 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.926 s, estimated 4 s
```

## Causing issue in SWC/Jest

I wanted to use `swc/jest` to make the tests run more faster. So I followed the below steps

- npm i -D @swc/core @swc/jest
- Created `.swcrc` file
- Replace `ts-jest` with `swc/jest` in `jest.config.ts`

## To Reproduce
- jo to `jest.config.js`
- use `['@swc/jest']` instead of `ts-jest`
- run `npm run test` tests will fail, because the `willUpdate()` method lifecycle is not getting triggered.