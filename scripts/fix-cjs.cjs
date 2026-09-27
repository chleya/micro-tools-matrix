// Rename .js outputs in dist/cjs to .cjs so Node treats them as CommonJS.
const fs = require('fs');
const path = require('path');

const cjsDir = path.join(__dirname, '..', 'dist', 'cjs');

function renameJsToCjs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      renameJsToCjs(full);
    } else if (entry.name.endsWith('.js')) {
      fs.renameSync(full, full.replace(/\.js$/, '.cjs'));
    }
  }
}

renameJsToCjs(cjsDir);
console.log('CJS files renamed to .cjs');
