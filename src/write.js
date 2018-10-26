"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var read_1 = require("./read");
function write(dir, dest) {
    var paths = dir;
    if (!(dir instanceof Array)) {
        paths = read_1.read(dir);
    }
    var output = JSON.stringify({ paths: paths }, null, 2);
    fs_1.writeFile(dest, output, function (err) {
        if (err)
            throw err;
    });
}
exports.write = write;
