# path-union
> Create a union between two paths

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
