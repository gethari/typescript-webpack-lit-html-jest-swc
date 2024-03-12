TypeScript Webpack lit-html Jest Test Demo
=======================================

Write test for lit-html with jest.

```
npm install
npm run test
```

## Works fine with `ts-jest`

```
 test
    ✓ is defined (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.936 s
```

## SWC/Jest

I wanted to use `swc/jest` to make the tests run more faster. So I followed the below steps

1- npm i -D @swc/core @swc/jest
2- Created `.swcrc` file
3- Replace `ts-jest` with `swc/jest` in `jest.config.ts`