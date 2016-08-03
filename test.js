'use strict'

const test = require('tape')
const path = require('path')
const union = require('./index')


test('it works', function(t){
  const expected = path.join(__dirname, 'output/src/images/')
  const expected2 = path.join(__dirname, 'output/images/src/stuff/')
  
  t.equal(union(path.join(__dirname, 'output'), path.join(__dirname, 'src/images')), expected)
  t.equal(union(path.join(__dirname, 'output/images'), path.join(__dirname, 'src/stuff')), expected2)
  t.end()
})

