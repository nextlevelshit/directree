const assert = require('assert')
const os = require('os')
const path = require('path')
const fs = require('fs-extra')

const paths = require('./paths')
const dirs = require('./dirs')
const files = require('./files')
const read = require('./../src/read')

describe('Read', () => {
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

  it('Should return an error if the source dir does not exist.', () => {
    assert.throws(() => read('dir-of-hope-and-non-existence/'), Error)
  })

  it('Should return all items of a dir containing path.', () => {
    const items = read(TEST_DIR)

    assert.strictEqual(items.length, paths.length)

    items.forEach((p, i) => {
      assert.deepStrictEqual(p, paths[i])
    })
  })
})
