'use strict'

import test from 'tape'
import path from 'path'
import {union, compose} from './index'

test('union', function(t){
  const expected = path.join(__dirname, 'output/src/images')
  const expected2 = path.join(__dirname, 'output/images/src/stuff')
  
  t.equal(union(path.join(__dirname, 'output'), path.join(__dirname, 'src/images')), expected)
  t.equal(union(path.join(__dirname, 'output/images'), path.join(__dirname, 'src/stuff')), expected2)
  t.end()
})

test('compose', function(t){
  t.equals(compose(x => x, a => a + 1, y => y + 10)(10), 21)
  t.end()
})

