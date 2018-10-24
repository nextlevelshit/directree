'use strict'

const util = require('./src/utilities')
const read = require('.src/read')
const write = require('.src/write')
const search = require('.src/search')

module.exports = {
  read,
  write,
  search
}
module.exports.default = module.exports
