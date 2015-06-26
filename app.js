var express      = require('express'),
    app          = express();


// load modules
require('./config.js')(app);
require('./middlewares.js')(app);


module.exports = app;
