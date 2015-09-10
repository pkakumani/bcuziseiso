'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

var config = require('../server/config');

describe('Config', function() {
	it('has a valid port', function() {
		expect(config.port).to.exist;
    expect(config.port).to.be.a('number');
    expect(config.port).to.be.gte(0);
    expect(config.port).to.be.lte(65536);
	});
});