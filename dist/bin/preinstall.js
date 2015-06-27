#!/usr/bin/env node


/**
 * Module dependencies.
 * Original source:
 * https://raw.githubusercontent.com/strongloop-community/express-example-modular/master/bin/preinstall.js
 */

'use strict';

var fs = require('fs'),
    resolve = require('path').resolve,
    join = require('path').join,
    cp = require('child_process');

// get library path
var lib = resolve(__dirname, '../lib/');

fs.readdirSync(lib).forEach(function (mod) {
  var modPath = join(lib, mod);

  // ensure path has package.json
  if (!fs.existsSync(join(modPath, 'package.json'))) return;

  // install folder
  cp.spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' });
});
//# sourceMappingURL=../bin/preinstall.js.map