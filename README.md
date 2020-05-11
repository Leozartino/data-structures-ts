# Data Structures
🛢 Codes containing implementation of data structures in Typescript.

[![NPM Version][npm-image]][npm-url]

![](header.png)

## Installation

With yarn: run the following command in your project clone

```sh
yarn 
```

With npm:

```sh
npm install
```

## Usage example

The classes of the algorithms have already been instantiated in the file src/algotithms /index.js. You can change this implementation if you want.

```typescript
import {InstantiatedStack, InstantiatedQueue, InstantiatedDeck} from './algorithms/index';
import binarySearch from './algorithms/binarySearch';

InstantiatedStack.push(5,6,7,8,9);

console.log(InstantiatedStack.showStack()); // [5,6,7,8,9]
InstantiatedStack.pop(); // 9
console.log(InstantiatedStack.showStack()); // [5,6,7,8]


InstantiatedQueue.enqueue(12);
InstantiatedQueue.enqueue(55);
InstantiatedQueue.enqueue(9);

console.log(InstantiatedQueue.showQueue()); // [12, 55, 9]
InstantiatedQueue.dequeue(); // 12
console.log(InstantiatedQueue.showQueue()); // [55, 9]


InstantiatedDeck.addBack(6);
InstantiatedDeck.addFront(3);

console.log(InstantiatedDeck.showDeck()); // [3, 6]
```

## Meta

Leonardo Oliveira – [@leozartino](https://twitter.com/leozartino) – leozartino@gmail.com

Distributed under the MIT license. See [MIT](https://choosealicense.com/licenses/mit/) for more information.


## Contributing

1. Fork it (<https://github.com/Leozartino/data-structures-ts/fork>)
2. Create your feature branch (`git checkout -b feature/newFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/newFeature`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
