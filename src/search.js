'use strict'

const util = require('./utilities')

function search (paths, query = '') {
  const queryGen = searchGenerator(
    paths,
    query.split('/').filter(item => item)
  )
  let next = queryGen.next()

  while (!next.done) next = queryGen.next()

  return next.value
}

function * searchGenerator (paths, queryChunks) {
  while (queryChunks.length > 0) {
    paths = util.findValueOf(paths, queryChunks.shift())
    yield
  }
  return paths
}

module.exports = search
module.exports.default = module.exports

