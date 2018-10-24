'use strict'

function findValueOf (arr, key) {
  try {
    return Object.values(arr.find(item => {
      return isObjectKey(item, key)
    }))[0]
  } catch (err) {
    return null
  }
}

function isObject (param) {
  return param instanceof Object && !(param instanceof Array)
}

function isObjectKey (obj, key) {
  return isObject(obj)
    ? Object.keys(obj)[0] === key
    : false
}

module.exports = {
  findValueOf,
  isObject,
  isObjectKey
}
module.exports.default = module.exports