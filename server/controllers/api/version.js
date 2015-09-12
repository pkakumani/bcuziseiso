'use strict';

/**
 * Get the current API version
 */
exports.getCurrent = function getCurrent(req, res) {
	res.json({ 'version': '0.1.0' });
}