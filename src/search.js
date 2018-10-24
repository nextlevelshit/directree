'use strict'

const util = require('./utilities')

function search (collection, query = '') {
  const queryGen = query(
    collection,
    query.split('/').filter(item => item)
  )
  let next = queryGen.next()

  while (!next.done) next = queryGen.next()

  return next.value
}

function * query (collection, queryChunks) {
  while (queryChunks.length > 0) {
    collection = util.findValueOf(collection, queryChunks.shift())
    yield
  }
  return collection
}

module.exports = search
module.exports.default = module.exports

