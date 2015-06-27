'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

// load modules

var _configJs = require('./config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _middlewaresJs = require('./middlewares.js');

var _middlewaresJs2 = _interopRequireDefault(_middlewaresJs);

var app = (0, _express2['default'])();(0, _configJs2['default'])(app);
(0, _middlewaresJs2['default'])(app);

exports['default'] = app;
module.exports = exports['default'];
//# sourceMappingURL=app.js.map