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
```js
const dtree = require('nls-directree')
```

Example folder structure
```
./
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
console.dir(dtree.read('./work'), { depth: null })
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
console.dir(dtree.search(dtree.read('./'), 'work/drawing'), { depth: null })
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

#### dtree.write(*dir: string, dest: string*): void

*Coming soon*

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


