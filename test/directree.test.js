const assert = require('assert')
const os = require('os')
const path = require('path')
const fs = require('fs-extra')

const paths = require('./paths')
const dirs = require('./dirs')
const files = require('./files')
const dtree = require('./../index')

describe('Directree', () => {
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

  it('Should output the same search results from reading.', () => {
    const dir = dtree.read(TEST_DIR)

    assert.deepStrictEqual(dtree.search(dir), paths)
  })
})
