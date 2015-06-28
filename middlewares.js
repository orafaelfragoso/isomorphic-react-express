var React     = require('react/addons'),
    Bootstrap = React.createFactory(require('Bootstrap'));

module.exports = function(app) {

  // Bootstrap the App
  app.get('/', function(req, res){
		var reactHtml = React.renderToString(Bootstrap({}));
    res.render('index.ejs', {reactOutput: reactHtml});
	});

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    });
  });

};
