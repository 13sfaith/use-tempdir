const withTmpDir = require('./index');
const fs = require('fs');
const path = require('path');

withTmpDir(async (dir) => {
  const file = path.join(dir, 'hello.txt');
  fs.writeFileSync(file, 'Hello world!');
  console.log('Wrote to:', file);
}).then(() => {
  console.log('Temp dir cleaned up.');
});

