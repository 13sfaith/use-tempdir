const fs = require('fs');
const os = require('os');
const path = require('path');
const { promisify } = require('util');
const { rimraf } = require('rimraf');

const mkdtemp = promisify(fs.mkdtemp);

/**
 * Creates a temporary directory, runs the callback, and cleans up afterward.
 *
 * @param {Function} fn - Async function that receives the temp directory path
 * @param {string} [prefix='tmp-'] - Optional prefix for the directory
 */
async function withTmpDir(fn, prefix = 'tmp-') {
  const tmpBase = path.join(os.tmpdir(), prefix);
  const tmpDir = await mkdtemp(tmpBase);

  try {
    return await fn(tmpDir);
  } finally {
    await rimraf(tmpDir);
  }
}

module.exports = withTmpDir;
