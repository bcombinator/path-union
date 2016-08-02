'use strict'

const _compose = function _compose(f, g) {
    return function () {
        return f(g.apply(null, arguments));
    };
};

const compose = fns => fns.reduce(_compose)

const uniq = xs => xs.reduce((list, x) => list.indexOf(x) === -1 ? list.concat(x) : list, [])

const identity = x => x

const concat = (xs, list) => xs.concat(list)

const union = compose([uniq, concat])

const join = separator => xs => xs.join(separator)

const split = separator => str => str.split(separator)

const map = (fn, xs) => xs.map(fn)

const chain = fn => xs => [].concat.apply([], map(fn, xs))

const of = Array.of.bind(Array)

const pathUnion = compose([join('/'), union, chain(split('/')), of])

exports.pathUnion = pathUnion
