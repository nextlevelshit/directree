const util = require('./src/utilities')
const examples = require('./test/paths')

function queryRecursivly (collection, query = '') {
  const queryGen = queryGenerator(
    collection,
    query.split('/').filter(item => item)
  )
  let next = queryGen.next()

  while (!next.done) next = queryGen.next()

  return next.value
}

function * queryGenerator (collection, queryChunks) {
  while (queryChunks.length > 0) {
    collection = util.findValueOf(collection, queryChunks.shift())
    yield
  }

  return collection
}

console.log(queryRecursivly(examples, 'work/'))
