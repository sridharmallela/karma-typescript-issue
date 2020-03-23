# KARMA TYPESCRIPT ISSUE

## How to reproduce the issue

* Clone or Download this project and then install dependencies `npm install`, this might take few minutes.

* Run `npm test` will throw an error `ERROR [karma-server]: UnhandledRejection TypeError: Cannot read property 'files' of undefined`

* Run `npm run works` will not throw an error.

## Analysis

In [Report.ts](https://github.com/monounity/karma-typescript/blob/master/packages/karma-typescript/src/karma/reporter.ts),

```ts

  const coverage = that.coverageMap.get(browser);
  const coverageMap = istanbulCoverage.createCoverageMap();
  coverageMap.merge(coverage);

  const sourceMapStore = istanbulSourceMaps.createSourceMapStore();
  const remappedCoverageMap = await sourceMapStore.transformCoverage(coverageMap);

  if (results && config.hasCoverageThreshold && !threshold.check(browser, remappedCoverageMap.map)) {
    results.exitCode = 1;
  }
```

* remappedCoverageMap returns an instance of [Coverage Map](https://github.com/istanbuljs/istanbuljs/blob/master/packages/istanbul-lib-coverage/lib/coverage-map.js), which doesnot have a property `map` associated.
