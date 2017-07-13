"use strict";
var assert = require('assert');
var requester = require('../TMDBTestingSharedLib/util/requester');
var BaseTest = require('../TMDBTestingSharedLib/baseTest');
var TmdbV4BaseSuite = require('./tmdbV4BaseSuite');

var suiteName = "People Id Endpoint Suite";
class SomeV4EndpointSuite extends TmdbV4BaseSuite{
	constructor(){
		super(suiteName);
		this.addTest(
			new BaseTest(
				"Magically Test Everything about the V4 API",
				"This is a placholder for how to extend suites.",
				function(){
					assert(1,1);
				}
			)
		)
	}
}

module.exports = SomeV4EndpointSuite;