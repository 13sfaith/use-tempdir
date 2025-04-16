const { useTmpDir } = require('use-tmpdir');
const path = require('path');
const fs = require('fs');

useTmpDir(async (dir) => {
  const file = path.join(dir, 'cjs.txt');
  fs.writeFileSync(file, 'Hello world!');
  console.log('Wrote to:', file);
}).then(() => {
  console.log('Temp dir cleaned up.');
});
