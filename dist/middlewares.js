'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _libBootstrap = require('./lib/Bootstrap');

var _libBootstrap2 = _interopRequireDefault(_libBootstrap);

var Bootstrap = _reactAddons2['default'].createFactory(_libBootstrap2['default']);

exports['default'] = function (app) {

  // Bootstrap the App
  app.get('/', function (req, res) {
    var reactHtml = _reactAddons2['default'].renderToString(Bootstrap({}));
    res.render('index.ejs', { reactOutput: reactHtml });
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=middlewares.js.map