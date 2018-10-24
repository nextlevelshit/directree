'use strict'

const util = require('./utilities')

function write () {
  throw {
    name: 'Function not in Use',
    message: 'This funtion is not available at this stage of developement',
    toString: function() {
      return this.name + ': ' + this.message
    }
  }
}

module.exports = write
module.exports.default = module.exports

