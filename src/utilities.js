'use strict'

function findValueOf (arr, key) {
  try {
    return Object.values(arr.find(item => {
      return isObjectOfKey(item, key)
    }))[0]
  } catch (err) {
    return null
  }
}

function isObject (param) {
  return typeof param === 'object'
}

function isObjectOfKey (obj, key) {
  return isObject(obj)
    ? Object.keys(obj)[0] === key
    : false
}

module.exports = {
  findValueOf,
  isObject,
  isObjectOfKey
}
