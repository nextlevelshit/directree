import { writeFile } from 'fs';
import { read } from './read';

export function write (dir, dest) {
  let paths = dir

  if (!(dir instanceof Array)) {
    paths = read(dir)
  }

  const output = JSON.stringify({ paths: paths }, null, 2)

  writeFile(dest, output, (err) => {
    if (err) throw err
  })
}
