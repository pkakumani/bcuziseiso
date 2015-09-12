'use strict';

var Service = exports = module.exports = createService;

/**
 * Service constructor
 * @param {String} name
 * @returns new Service object
 */
Service.prototype.constructor = function createService(name) {
	this.name = name;
}
