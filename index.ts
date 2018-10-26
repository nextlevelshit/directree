export function search (paths, query = '') {
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
    paths = findValueOf(paths, queryChunks.shift())
    yield
  }
  return paths
}

function findValueOf(arr, key) {
  try {
    return Object.values(arr.find(item => {
      return this.isObjectKey(item, key);
    }))[0];
  } catch (err) {
    throw new Error('No such key in array');
  }
}

function isObject(param) {
  return param instanceof Object && !(param instanceof Array);
}

function isObjectKey(obj, key) {
  return this.isObject(obj)
    ? Object.keys(obj)[0] === key
    : false;
}
