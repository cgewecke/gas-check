# gas-check






Testing codechecks / eth-gas-reporter integration

[![CircleCI](https://circleci.com/gh/cgewecke/gas-check.svg?style=svg)](https://circleci.com/gh/cgewecke/gas-check)
![Codechecks](https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true)

### Install

```
npm install
```

### Test

```
npm test
```

### Quick PR

Some of the unit tests randomize gas consumption.

```
git checkout -b <random-branch>
date > change.txt
git commit -a -m 'test'
git push --set-upstream origin <random-branch>
```
