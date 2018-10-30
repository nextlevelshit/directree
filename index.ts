import { findValueOf, isObject, isObjectKey } from './src/utilities';

export function search (paths, query = '') {
  const queryGen = searchGenerator(
    paths,
    query.split('/').filter(item => item)
  );
  let next = queryGen.next();

  while (!next.done) next = queryGen.next();

  return next.value;
}

function * searchGenerator (paths, queryChunks): IterableIterator<object> {
  while (queryChunks.length > 0) {
    paths = findValueOf(paths, queryChunks.shift());
    yield;
  }
  return paths;
}