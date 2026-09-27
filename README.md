# micro-tools-matrix

A zero-dependency TypeScript utility library — micro-tools for everyday tasks.

## Installation

```bash
npm install micro-tools-matrix
```

## Usage

```ts
import { camelCase, chunk, debounce, isEmail, formatBytes } from 'micro-tools-matrix';

camelCase('hello-world'); // 'helloWorld'
chunk([1, 2, 3, 4, 5], 2); // [[1,2], [3,4], [5]]
isEmail('test@example.com'); // true
formatBytes(1024 * 1024); // '1 MB'
```

## Modules

| Module | Description |
|--------|-------------|
| `string` | camelCase, kebabCase, truncate, pad, stripHtml... |
| `array` | chunk, unique, groupBy, sortBy, partition, difference... |
| `object` | pick, omit, deepClone, deepMerge, flattenObject, getPath... |
| `date` | formatDate, addDays, daysBetween, timeAgo, startOfDay... |
| `validate` | isEmail, isUrl, isPhone, isIPv4, isCreditCard, isEmpty... |
| `function` | debounce, throttle, memoize, curry, pipe, retry... |
| `number` | clamp, randomInt, sum, average, formatBytes, range... |

## Development

```bash
npm install
npm test
npm run build
```

## License

MIT
