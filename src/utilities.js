"use strict";
exports.__esModule = true;
function findValueOf(arr, key) {
    var _this = this;
    try {
        return Object.values(arr.find(function (item) {
            return _this.isObjectKey(item, key);
        }))[0];
    }
    catch (err) {
        throw new Error('No such key in array');
    }
}
exports.findValueOf = findValueOf;
function isObject(param) {
    return param instanceof Object && !(param instanceof Array);
}
exports.isObject = isObject;
function isObjectKey(obj, key) {
    return this.isObject(obj)
        ? Object.keys(obj)[0] === key
        : false;
}
exports.isObjectKey = isObjectKey;
