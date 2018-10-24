'use strict'

const util = require('./utilities')

function read () {
  try {
    throw {
      name: 'Function not in Use',
      message: 'This funtion is not available at this stage of developement',
      toString: function() {
        return this.name + ': ' + this.message
      }
    };
  }
  catch (e) {
    alert(e)
  }
}

module.exports = read
module.exports.default = module.exports

