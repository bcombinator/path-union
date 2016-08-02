# path-union
> Create a union between two paths


## Usage
Given two paths find the union between them.



```js
const union = require('path-union')

const src = '/Users/davidchase/Desktop/github/path-union/fixtures/packages'
const dest = '/Users/davidchase/Desktop/github/path-union/dist'

union(dest, src) // => /Users/davidchase/Desktop/github/path-union/dist/fixtures/packages
```
