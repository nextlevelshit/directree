'use strict'
const fs = require('fs')
const read = require('./read')

function write (dir, dest) {
  let paths = dir

  if (!(dir instanceof Array)) {
    paths = read(dir)
  }

  fs.writeFile(dest, `{\n\tpaths: ${paths.toString()}\n}`, (err) => {
    if (err) throw err
  })
}

module.exports = write
module.exports.default = module.exports
