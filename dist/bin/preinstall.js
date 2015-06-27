#!/usr/bin/env node


/**
 * Module dependencies.
 * Original source:
 * https://raw.githubusercontent.com/strongloop-community/express-example-modular/master/bin/preinstall.js
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

// get library path
var lib = _path2['default'].resolve(__dirname, '../lib/');

_fs2['default'].readdirSync(lib).forEach(function (mod) {
  var modPath = _path2['default'].join(lib, mod);

  // ensure path has package.json
  if (!_fs2['default'].existsSync(_path2['default'].join(modPath, 'package.json'))) return;

  // install folder
  _child_process2['default'].spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' });
});
//# sourceMappingURL=../bin/preinstall.js.map