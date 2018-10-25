const assert = require('assert')
const os = require('os')
const path = require('path')
const fs = require('fs-extra')

const write = require('./../src/write')
const read = require('./../src/read')
const dirs = require('./dirs')
const files = require('./files')

describe('Write', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'nls-directree')
  let DIRS
  let FILES

  beforeEach(() => {
    fs.emptyDirSync(TEST_DIR)
    DIRS = dirs.map(dir => path.join(TEST_DIR, dir))
    FILES = files.map(file => path.join(TEST_DIR, file))
    DIRS.forEach(dir => fs.ensureDirSync(dir))
    FILES.forEach(file => fs.ensureFileSync(file))
  })

  afterEach(() => fs.removeSync(TEST_DIR))

  it('Should write file from read paths.', () => {
    const file = `${TEST_DIR}/file.json`
    const dir = read(TEST_DIR)

    assert.doesNotThrow(() => write(dir, file))
    assert.deepStrictEqual(fs.existsSync(file), true)
  })

  it('Should write file from directory path.', () => {
    const file = `${TEST_DIR}/file.json`

    assert.doesNotThrow(() => write(TEST_DIR, file))
    assert.deepStrictEqual(fs.existsSync(file), true)
  })
})
