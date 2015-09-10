'use strict';

var homeController = require('./controllers/home');
var apiVersionController = require('./controllers/api/version');

/**
 * Initialize routes
 * @param {Object} app Express application
 */
exports.init = function initializeRoutes(app) {
	app.get('/', homeController.index);

  // API
  app.get('/api/version', apiVersionController.getCurrent);
  app.get('/api/version/current', apiVersionController.getCurrent);
}