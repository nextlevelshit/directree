'use strict'

const assert = require('assert')
const paths = require('./paths')
const search = require('./../src/search')

describe('Search', () => {
  const resultMap = [
    { 'work': paths[6].work },
    { 'work/sculpture': paths[6].work[3].sculpture },
    { 'work/drawing': paths[6].work[0].drawing }
  ]

  it('Should return empty list for empty directory.', () => {
    assert.deepStrictEqual(search.search(paths, 'work/sculpture'), [])
  })

  it('Should return error because of not finding any results.', () => {
    assert.throws(() => search(paths, 'dont-listen-to-me'), Error)
  })

  it('Should return search results.', () => {
    resultMap.forEach(result => {
      const entry = Object.entries(result)[0]
      assert.deepStrictEqual(search.search(paths, entry[0]), entry[1])
    })
  })
})
