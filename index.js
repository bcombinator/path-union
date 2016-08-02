'use strict'

const union = require('./prelude').union

module.exports = (path, pathA) => union([path.split('/'), pathA.split('/')]).join('/')
