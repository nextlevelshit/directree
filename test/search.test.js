'use strict'

const assert = require('assert')
const paths = require('./paths')
const search = require('./../src/search')
const util = require('./../src/utilities')

describe('Search', () => {
  const resultMap = [
    { 'work': paths[6].work },
    { 'work/sculpture': paths[6].work[3].sculpture },
    { 'work/drawing': paths[6].work[2].drawing },
    { 'dont-work-for-less': null }
  ]

  it('Should return empty list for empty directory.', () => {
    assert.deepEqual(search(paths, 'work/sculpture'), [])
  })

  it('Should return null for because of not finding any results.', () => {
    assert.deepEqual(search(paths, 'dont-listen-to-me'), null)
  })

  it('Should return search results.', () => {
    resultMap.forEach(result => {
      const entry = Object.entries(result)[0]
      assert.deepEqual(search(paths, entry[0]), entry[1])
    })
  })
  
})