"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
function read(dir) {
    dir = path_1.resolve(dir);
    var results = [];
    var pathsFull = fs_1.readdirSync(dir).map(function (p) { return dir + path_1.sep + p; });
    var pathsRelative = fs_1.readdirSync(dir).map(function (p) { return p; });
    pathsRelative.forEach(function (relative, i) {
        var full = pathsFull[i];
        var isDir = fs_1.statSync(full).isDirectory();
        results.push(isDir
            ? (_a = {}, _a[relative] = read(full), _a) : relative);
        var _a;
    });
    return results;
}
exports.read = read;
