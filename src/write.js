'use strict'
const fs = require('fs')
const read = require('./read')

function write (dir, dest) {
  let paths = dir

  if (!(dir instanceof Array)) {
    paths = read(dir)
  }

  const output = JSON.stringify({ paths: paths }, null, 2)

  fs.writeFile(dest, output, (err) => {
    if (err) throw err
  })
}

module.exports = write
module.exports.default = module.exports
