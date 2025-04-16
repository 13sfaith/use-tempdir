# use-tmpdir

Create a temporary directory, run some code, and clean it up automatically.

## Install

```bash
npm install use-tmpdir
```

`use-tmpdir` is a hyprid module supporting both `import` and `require`.

```js
// esm
import { useTmpDir } from 'use-tmpdir'
// cjs
const { useTmpDir } = require('use-tmpdir')
```

## Usage

```js
import { useTmpDir } from 'use-tmpdir';
import path from 'path';
import fs from 'fs';

useTmpDir(async (dir) => {
  // temporary file `dir` is made
  const file = path.join(dir, 'hello.txt');
  fs.writeFileSync(file, 'Hello world!');
  console.log('Wrote to:', file);
}).then(() => {
  // temporary file `dir` is cleanly removed
  console.log('Temp dir cleaned up.');
});
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
