export function findValueOf(arr, key) {
  try {
    return Object.values(arr.find(item => {
      return this.isObjectKey(item, key)
    }))[0]
  } catch (err) {
    throw new Error('No such key in array')
  }
}

export function isObject(param) {
  return param instanceof Object && !(param instanceof Array)
}

export function isObjectKey(obj, key) {
  return this.isObject(obj)
    ? Object.keys(obj)[0] === key
    : false
}
