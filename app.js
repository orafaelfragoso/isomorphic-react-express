'use strict';

require('app-module-path').addPath(__dirname + '/lib'); // Tell node to use lib/ as node_modules as well

var express      = require('express'),
    app          = express();


// load modules
require('./config.js')(app);
require('./middlewares.js')(app);


module.exports = app;
