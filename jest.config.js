module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        // transform files with ts-jest
        "^.+\\.(js|ts)$": "ts-jest",
    },
    transformIgnorePatterns: [
        'node_modules/(?!(lit-html|lit-element|lit|@lit|@shoelace|@shoelace-style|chartjs-plugin-datalabels|chartjs-adapter-luxon)/)',
    ],
    globals: {
        "ts-jest": {
            tsConfig: {
                // allow js in typescript
                allowJs: true,
            },
        },
    },
}
