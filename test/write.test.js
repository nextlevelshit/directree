const assert = require('assert')
const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const write = require('./../src/write')
const read = require('./../src/read')

describe('Write', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'nls-directree')

  beforeEach(() => {
    fs.emptyDirSync(TEST_DIR)
  })

  afterEach(() => fs.removeSync(TEST_DIR))

  it('Should write file from directory path.', () => {
    const file = `${TEST_DIR}/file.json`

    assert.doesNotThrow(() => write(TEST_DIR, file))
    assert.deepStrictEqual(fs.existsSync(file), true)
  })

  it('Should write file from read paths.', () => {
    const file = `${TEST_DIR}/file.json`
    const paths = read(TEST_DIR)

    assert.doesNotThrow(() => write(paths, file))
    assert.deepStrictEqual(fs.existsSync(file), true)
  })
})
