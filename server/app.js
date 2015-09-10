'use strict';

// External dependencies
var path = require('path');
var express = require('express');
var swig = require('swig');
var logger = require('morgan');
'use strict';

// Internal dependencies
var config = require('./config');
var routes = require('./routes');

var app = exports = module.exports = express();

// Set up view engine
app.engine('html', swig.renderFile)
app.set('view engine', 'html');
app.set('view cache', config.cacheViews);
app.set('views', path.join(config.rootPath, './server/views'));
swig.setDefaults({
    cache: config.cacheViews
});

// Static content
app.use('/images', express.static(path.join(config.rootPath, './static/images')));
app.use('/scripts', express.static(path.join(config.rootPath, './static/scripts')));
app.use('/style', express.static(path.join(config.rootPath, './static/style')));

// Bootstrap routes
routes.init(app);

app.port = config.port;

/**
 * Gracefully shutdown the express application and cleanup any resources
 */
app.stop = function shutdownServer() {
  console.log('Shutting down...')
  app.server.close();
  process.exit(0);
}

/**
 * Start up the express application
 */
app.start = function startupServer() {
  console.log('Starting...');

  var server = app.server = app.listen(app.port, function () {
    var bindings = server.address();
    console.log('Server listening at %s:%s', bindings.address, bindings.port);
  })

  // Bind termination events
  process.on('SIGINT', app.stop.bind(null, {}));
  process.on('SIGTERM', app.stop.bind(null, {}));
};