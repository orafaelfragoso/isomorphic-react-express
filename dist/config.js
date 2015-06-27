'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nodeJsx = require('node-jsx');

(0, _nodeJsx.install)();

exports['default'] = function (app) {

  // view engine setup
  app.set('views', _path2['default'].join(__dirname, 'lib/_Shared/views'));
  app.set('view engine', 'ejs');

  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use((0, _morgan2['default'])('dev'));
  app.use(_bodyParser2['default'].json());
  app.use(_bodyParser2['default'].urlencoded({ extended: false }));
  app.use((0, _cookieParser2['default'])());
  app.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));
};

module.exports = exports['default'];
//# sourceMappingURL=config.js.map