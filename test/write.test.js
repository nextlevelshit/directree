const assert = require('assert')
// const paths = require('./paths')
const write = require('./../src/write')
// const util = require('./../src/utilities')

describe('Write', () => {
  it('Should throw error.', () => {
    assert.throws(write, Error)
  })
})
