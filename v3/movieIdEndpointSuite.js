"use strict";
var assert = require('assert');
var requester = require('../TMDBTestingSharedLib/util/requester');
var BaseTest = require('../TMDBTestingSharedLib/baseTest');
var TmdbV3BaseSuite = require('./tmdbV3BaseSuite');

function generateRandomCharacterSequence(length, chars){
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

var suiteName = "Movie Id Endpoint Suite";
class MovieIdEndpointSuite extends TmdbV3BaseSuite{
	constructor(){
		super(suiteName);
		this.baseUrl += "movie/";
		var baseUrl = this.baseUrl;//We lose a reference to this inside of run functions.
		var urlFooter = this.urlFooter;
		var keyIntegrityLimit = 10;
		var randomSelectionLimit = 10;
		this.addTest(
			new BaseTest(
				"VerifyIntegrityOfKeysTest",
`
	Steps:
		1. Generate random alphanumeric string.
		2. Send generated string to server.
		3. Recieve server response.
	Expected:
		Response Status is 401.
		Content-Type is application/json
`,
				async function(){
					for(var i = 0; i < keyIntegrityLimit; i++){
						var response = await requester.sendGetRequest(baseUrl + "550" + generateRandomCharacterSequence(32,'0123456789abcdefghijklmnopqrstuvwxyz'));
						assert.equal(401, response.statusCode);
						assert.ok(response.headers['content-type'].includes('application/json'));
					}
				}
			)
		);
		this.addTest(
			new BaseTest(
				"RandomlySendGoodBadKeyAndBadIdTest",
`
	Steps:
		1. Randomly select a Good, Bad Key, or Bad Id request to send.
		2. Send selected request.
		3. Recieve server response.
	Expected:
		Response Status for Good request is 200.
		Response Status for Bad Key request is 401.
		Response Status for Bad Id request is 404.
		Content-Type is application/json
`,
				function(){
					var requests = [
						async function(){
							var response = await requester.sendGetRequest(baseUrl + "550" + urlFooter);
							assert.equal(200, response.statusCode);
							assert.ok(response.headers['content-type'].includes('application/json'));
						},
						async function(){
							var response = await requester.sendGetRequest(baseUrl + "550?api_key=asdf");
							assert.equal(401, response.statusCode);
							assert.ok(response.headers['content-type'].includes('application/json'));
						},
						async function(){
							var response = await requester.sendGetRequest(baseUrl + "a" + urlFooter);
							assert.equal(404, response.statusCode);
							assert.ok(response.headers['content-type'].includes('application/json'));
						}
											
					]
					for(var i = 0; i < randomSelectionLimit; i++){
						requests[Math.floor(Math.random() * requests.length)]();
					}
				}
			)
		);
	}
}

module.exports = MovieIdEndpointSuite;




