import * as fs from 'fs';
import * as path from 'path';

import { read } from 'read';

export function write (dir, dest) {
  let paths = dir

  if (!(dir instanceof Array)) {
    paths = read(dir)
  }

  const output = JSON.stringify({ paths: paths }, null, 2)

  fs.writeFile(dest, output, (err) => {
    if (err) throw err
  })
}
