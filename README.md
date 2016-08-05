# path-union
> Create a union between two paths

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://img.shields.io/npm/v/path-union.svg)](https://www.npmjs.com/package/path-union)

## Install

```sh
npm install path-union
```

## Usage
Given two paths create a new union path.



```js
const union = require('path-union')

const src = '/Users/davidchase/Desktop/github/path-union/fixtures/packages'
const dest = '/Users/davidchase/Desktop/github/path-union/dist'

union(dest, src) // => /Users/davidchase/Desktop/github/path-union/dist/fixtures/packages
```

## API
#### union :: String => String => String


## Todo
- [ ] add rollup + buble
