import { readdirSync, statSync } from 'fs';
import { resolve, sep } from 'path';

export function read (dir) {
  dir = resolve(dir)

  const results = []
  const pathsFull = readdirSync(dir).map(p => dir + sep + p)
  const pathsRelative = readdirSync(dir).map(p => p)

  pathsRelative.forEach((relative, i) => {
    const full = pathsFull[i]
    const isDir = statSync(full).isDirectory()

    results.push(isDir
      ? { [relative]: read(full) }
      : relative
    )
  })

  return results
}