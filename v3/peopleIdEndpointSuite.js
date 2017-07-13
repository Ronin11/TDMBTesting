"use strict";
var assert = require('assert');
var requester = require('../TMDBTestingSharedLib/util/requester');
var BaseTest = require('../TMDBTestingSharedLib/baseTest');
var TmdbV3BaseSuite = require('./tmdbV3BaseSuite');

var suiteName = "People Id Endpoint Suite";
class PeopleIdEndpointSuite extends TmdbV3BaseSuite{
	constructor(){
		super(suiteName);
		this.baseUrl += "people/";
		this.addTest(
			new BaseTest(
				"Magically Test Everything about the people endpoint",
				"This is a placholder for how to extend suites.",
				function(){
					assert(1,1);
				}
			)
		)
	}
}

module.exports = PeopleIdEndpointSuite;




