exports = module.exports = config => {
    config.set({
        browsers: ['ChromeHeadless'],
        exclude: ['node_modules', '**/*.d.ts'],
        files: [{ pattern: 'client/**/*.ts' }],
        frameworks: ['jasmine', 'karma-typescript'],
        karmaTypescriptConfig: {
            coverageOptions: {
                exclude: [/\.spec\.ts$/i],
                threshold: config.coverage ? undefined : {
                    global: {
                        statements: 100,
                        branches: 100,
                        functions: 100,
                        lines: 100
                    }
                }
            },
            reports: {
                text: ''
            },
            tsconfig: './tsconfig.json'
        },
        logLevel: config.LOG_INFO,
        preprocessors: {
            'client/**/*.ts': 'karma-typescript'
        },
        reporters: ['karma-typescript', 'mocha'],
        singleRun: true
    });
};

process.on('infrastructure_error' as any, console.error);
