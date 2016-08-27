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
import {union} from 'path-union'

const src = '/Users/davidchase/Desktop/github/path-union/fixtures/packages'
const dest = '/Users/davidchase/Desktop/github/path-union/dist'

union(dest, src) // => '/Users/davidchase/Desktop/github/path-union/dist/fixtures/packages'
```

also as a bonus you can do functional composition right to left 🔥

```js
import {union, compose} from 'path-union'
import {dirname} from 'path'

const src = '/Users/davidchase/Desktop/github/path-union/fixtures/packages'
const dest = '/Users/davidchase/Desktop/github/path-union/dist'


compose(dirname, union)(dest, src) // => '/Users/davidchase/Desktop/github/path-union/dist/fixtures'
```

## API
#### union :: String => String => String


## Todo
- [x] add rollup + buble
