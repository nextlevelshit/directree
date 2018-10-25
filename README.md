<div align="center">
  <h1>DirecTree</h1>  
  <sup>Read, Query and Save Directory Trees recursivly</sup>
</div>

<br>

*WIP (Work in Progress): This project is under heavy construction. Please, use with caution.*

<br>

## Getting Started

### Rquirements

- [Install **Node.js** via package manager](//nodejs.org/en/download/package-manager/)

### Install

Use `npm` or `yarn` to install that package.

```bash
npm i nls-directree
# OR
yarn nls-directree
```

### Usage

Import/Require module
```ts
const dtree = require('nls-directree') // JavaScript
// OR
import * as dtree from 'nls-directree' // TypeScript
```

Example folder structure
```
path/to/your/directory
├── contact.md
├── disclaimer.md
├── imprint.md
├── index.md
├── news.md
├── vita.md
└── work
    ├── drawing
    │   └── Z-WV-2018-001
    │       ├── index.md
    │       └── Z-WV-2018-001-0.jpeg
    │   ├── example.jpg
    │   └── index.md
    └── sculpture
```

#### dtree.read(*dir: string*): array

`read()` inspects the given `dir` directory and outputs the tree.

Example code
```js
console.dir(dtree.read('path/toy/your/directory/work'), { depth: null })
```

Expected output
```js
[ 
  { 
    drawing: [ 
      { 
        'Z-WV-2018-001': [ 
          'Z-WV-2018-001-0.jpeg', 
          'index.md'
        ] 
      } 
    ] 
  },
  'example.jpg',
  'index.md',
  { 
    sculpture: [] 
  } 
]
```

#### dtree.search(*paths: array, query: null|string*): array

`search()` expects an array of paths (*formely the output of `read()`*) and a query string separated by `/` (*human-readable path*).

Example code
```js
console.dir(dtree.search(dtree.read('path/to/your/directory'), 'work/drawing'), { depth: null })
```

Expected output
```js
[ 
  { 
    'Z-WV-2018-001': [ 
      'Z-WV-2018-001-0.jpeg', 
      'index.md'
    ]
  } 
]
```

#### dtree.write(*dir: array|string, dest: string*): boolean


`write()` expects a compiled direcrory tree with `read()` or a path to the wished directory and the path to the destination file, where to write the content as JSON.

Example code
```js
dtree.write('path/to/your/directory', 'paths.json')
```
 Will write a file to `./paths.json` (*the identical folder, where your excuting that code*) in JSON format:

 ```json
{
  "paths": [
    "contact.md",
    "disclaimer.md",
    "imprint.md",
    "index.md",
    "news.md",
    "paths.json",
    "vita.md",
    {
      "work": [
        {
          "drawing": [
            {
              "Z-WV-2018-001": [
                "Z-WV-2018-001-0.jpeg",
                "index.md"
              ]
            }
          ]
        },
        "example.md",
        "index.md"
        {
          "sculpture": [ ]
        }
      ]
    }
  ]
}
```

## Development

Any contribution to that code base is warmly welcomed. Feel free to send merge requests, commits, improvements, issues and any kind of participation.

### Usefull Scripts

| command          | description                                                     |
|------------------|-----------------------------------------------------------------|
| `npm run test`   | start test environment                                          |

## Meta Information

*Informations about the motivation, authors and license*

## Author
- Michael Czechowski (<mail@dailysh.it>)

## License

Copyright (C) 2018 Michael Czechowski

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; version 2.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.


