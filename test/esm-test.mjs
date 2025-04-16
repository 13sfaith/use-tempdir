import { useTmpDir } from 'use-tmpdir';
import path from 'path';
import fs from 'fs';

useTmpDir(async (dir) => {
  const file = path.join(dir, 'esm.txt');
  fs.writeFileSync(file, 'Hello world!');
  console.log('Wrote to:', file);
}).then(() => {
  console.log('Temp dir cleaned up.');
});

