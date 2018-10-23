'use strict'

const assert = require('assert')
const util = require('../src/utilities')

describe('Utilities', () => {
  const objectSuccess = [
    {
      'foo': 'bar',
      'baz': [
        {
          'moo': 42
        }
      ]
    },
    {
      'foo': []
    }
  ]
  const objectFail = [
    '',
    ['foo', 'bar', 'baz'],
    'object',
    'Object',
    [{}],
    '{}',
    0,
    NaN,
    null
  ]

  it('should fail on recognizing non-objects', () => {
    objectFail.forEach(obj => {
      assert.strictEqual(util.isObject(obj), false)
    })
  })

  it('should success on recognizing an object', () => {   
    objectSuccess.forEach(obj => {
      assert.strictEqual(util.isObject(obj), true)
    })
  })

  it('should fail on finding key in objects', () => {
    objectFail.forEach(obj => {
      assert.strictEqual(util.isObjectKey(obj, 'foo'), false)
    })
    objectSuccess.forEach(obj => {
      assert.strictEqual(util.isObjectKey(obj, 'baz'), false)
    })
  })

  it('should success on finding key in objects', () => {
    objectSuccess.forEach(obj => {
      assert.strictEqual(util.isObjectKey(obj, 'foo'), true)
    })
  })

  it('should return null while not finding key in array', () => {
    assert.strictEqual(util.findValueOf(objectSuccess, 'bar'), null)
  })

  it('should success on finding first key in array', () => {
    assert.strictEqual(util.findValueOf(objectSuccess, 'foo'), objectSuccess[0].foo)
  })

})
