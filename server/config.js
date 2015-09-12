'use strict';

var path = require('path');

var config = exports = module.exports = {};

config.port = 1337;
config.rootPath = path.join(__dirname, '../');
config.cacheViews = false;