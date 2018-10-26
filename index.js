(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['nls-directree-searchonly'] = {})));
}(this, (function (exports) { 'use strict';

  function search (paths, query = '') {
    const queryGen = searchGenerator(
      paths,
      query.split('/').filter(item => item)
    );
    let next = queryGen.next();

    while (!next.done) next = queryGen.next();

    return next.value
  }

  function * searchGenerator (paths, queryChunks) {
    while (queryChunks.length > 0) {
      paths = findValueOf(paths, queryChunks.shift());
      yield;
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

  exports.search = search;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
