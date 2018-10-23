const util = require('./src/utilities')

function direcTree (collection, query = '') {
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

exports.modules = direcTree
