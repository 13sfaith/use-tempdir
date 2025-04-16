# use-tmpdir

Create a temporary directory, run some code, and clean it up automatically.

## Install

```bash
npm install use-tmpdir
```

## Usage

```js
const useTmpDir = require('use-tmpdir');
const fs = require('fs');
const path = require('path');

useTmpDir(async (dir) => {
  const file = path.join(dir, 'example.txt');
  fs.writeFileSync(file, 'Hello, temp!');
  console.log('File written at:', file);
});
// Temporary directory is cleaned up afterward
```

## API

### `useTmpDir(fn, prefix?)`

| Parameter | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `fn`      | Function | Async function that receives the temp dir path   |
| `prefix`  | string   | Optional directory name prefix (default: `tmp-`) |

- The function creates a unique temporary directory.
- Passes the path to your function.
- Cleans up the directory after your function finishes (even on error).

## License

MIT
