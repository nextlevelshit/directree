'use strict'
const fs = require('fs')
const path = require('path')

function read (dir) {
  dir = path.resolve(dir)

  const results = []
  const pathsFull = fs.readdirSync(dir).map(p => dir + path.sep + p)
  const pathsRelative = fs.readdirSync(dir).map(p => p)

  pathsRelative.forEach((relative, i) => {
    const full = pathsFull[i]
    const isDir = fs.statSync(full).isDirectory()

    results.push(isDir
      ? { [relative]: read(full) }
      : relative
    )
  })

  return results
}

module.exports = read
module.exports.default = module.exports
