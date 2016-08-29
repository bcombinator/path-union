'use strict'

const _compose = (f, g) => (...args) => f(g(...args))

const uniq = xs => xs.reduce((list, x) => list.indexOf(x) === -1 ? list.concat(x) : list, [])

const concat = (xs, list) => xs.concat(list)

export const compose = (...fns) => fns.reduce(_compose)

export const union = compose(uniq, concat)

export const join = separator => xs => xs.join(separator)

export const split = separator => str => str.split(separator)

export const chain = fn => xs => [].concat.apply([], xs.map(fn))

export const of = Array.of.bind(Array)

export const filter = pred => xs => xs.filter(pred)

export const prepend = a => b => a.concat(b)

export const id = x => x
