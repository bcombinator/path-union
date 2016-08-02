'use strict'

const compose = (f, g) => x => f(g(x))

const uniq = xs => xs.reduce((list, x) => list.indexOf(x) === -1 ? list.concat(x) : list, [])

const identity = x => x

const flatten = xs => [].concat.apply([], xs.map(identity)); 

exports.union = compose(uniq, flatten)
