'use strict'

const assert = require('assert')
const util = require('./../dist/src/utilities')

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

  it('Should fail on recognizing non-objects.', () => {
    objectFail.forEach(obj => {
      assert.deepStrictEqual(util.isObject(obj), false)
    })
  })

  it('Should success on recognizing an object.', () => {
    objectSuccess.forEach(obj => {
      assert.deepStrictEqual(util.isObject(obj), true)
    })
  })

  it('Should fail on finding key in objects.', () => {
    objectFail.forEach(obj => {
      assert.deepStrictEqual(util.isObjectKey(obj, 'foo'), false)
    })
    objectSuccess.forEach(obj => {
      assert.deepStrictEqual(util.isObjectKey(obj, 'baz'), false)
    })
  })

  it('Should success on finding key in objects.', () => {
    objectSuccess.forEach(obj => {
      assert.deepStrictEqual(util.isObjectKey(obj, 'foo'), true)
    })
  })

  it('Should throw error while not finding key in array.', () => {
    assert.throws(() => util.findValueOf(objectSuccess, 'bar'), Error)
  })

  it('Should success on finding first key in array.', () => {
    assert.deepStrictEqual(util.findValueOf(objectSuccess, 'foo'), objectSuccess[0].foo)
  })
})
