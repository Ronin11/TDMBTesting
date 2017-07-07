/* 
~~ Instructions for execution are in the README. ~~

Endpoint to test: /movie/{movie_id}
*/


/*********** Tests *************/
/*
	Test 1.
	Verify that the endpoint with a correct id and api key and verify that it returns a json
	object with the correct schema and a status 200 code.
*/

/*
	Test 2.
	Verify that the endpoint with an incorrect id and correct api key returns a 404 status and the json object.
*/

/*
	Test 3.
	Verify that the endpoint with a correct id and incorrect api key returns a 401 and the json object.
*/

/*
	Test 4.
	Verify that the endpoint with a incorrect id and incorrect api key returns a 401 and the json object.
	401, because the system should not waste resources on and unauthorized request.
*/

/*
	Test 5.
	Verify that the system returns a 401 and the json object when the api key is absent.
*/

/*
	Test 6.
	Verify that the api key is something that not easily spoofed/generated.
*/

/*
	Test 7.
	Verify that all of the movie id's in the db work correctly. More of a whitebox solution, but for each 
	movie entry in the db, verify that a response with the correct id is returned.
*/

/*
	Test 8.
	Verify that many correct requests in quick succession return 200's and json objects.
*/

/*
	Test 9.
	Verify that many incorrect api key requests in quick succession return 401's and json objects.
*/

/*
	Test 10.
	Verify that many incorrect movie id request in quick succesion return 404's and json objects.
*/

/*
	Test 11.
	Verify that a assortment of correct and incorrect requests in quick succession return the proper
	status code and json object.
*/

/*
	Test 12.
	Verify that assortments of alpha numeric strings passed in as the movie id return 404's proper json objects, 
	and does not cause crashes or security flaws.
*/

/*
	Test 13.
	Verify that assortments of special and reserved characters passed in as the movie id return proper status codes
	and json objects, and does not cause any crashes or security flaws.
*/

/*
	Test 14.
	Verify that all pragmatic string encodings behave properly. (UTF-8, UTF-16, ANSII, different languages, etc)
*/

/*
	Test 15.
	Verify that very large strings are properly handled, no crashes, security flaws, etc.
*/

/*
	Test 16.
	Verify that the request is server throughput is fulfilling requirements by overloading the 
	server with movie endpoint requests.
*/

/*********** Psuedo Code *************/
/*
	Test 6.
	for(i = 0; i < some arbitrary stopping point; i++){
		apiKey = generateRandomCharacterSequence()
		result = sendRequest('/movie/550?api_key=' + apiKey)
		assert result.response == 401;
		assert typeof result.jsonObj == "Object";
	}
*/

/*
	Test 11.
	requests = [
		{correct request, 200 response, json object}
		{bad api key request, 401 response, json object}
		{bad move id request, 404 response, json object}
	]
	for(i = 0; i < some arbitrary stopping point; i++){
		req = requests[getRandomInt()];
		result = sendRequest(req);
		assert req.response == result.response;
		assert req.jsonObj == result.jsonObj;
	}
*/

/*
	Test 14.
	stringEncodings = [
		functions to encode to different encodings.
	]
	foreach(encoding of stringEncodings){
		result = sendRequest('/movie/' + encoding(550) + apiKey)
		assert result.statusCode == 200;
		assert result.jsonObj.id == 550;
	}
*/

/*
	Test 15.
	str = '-' //Guaranteeing that the request should fail.
	for(i = 0; i < some arbitrary stopping point; i++){
		str += getRandomChar();
		result = sendRequest('/movie/' + str + apiKey)
		assert result.statusCode == 404;
		assert typeof result.jsonObj == 'Object';
	}

*/



/*********** Runnable Code *************/
var frisby = require('frisby');
var keys = require('./keys');

function test6(){
	function generateRandomCharacterSequence(length, chars){
		var result = '';
		for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	}

	for(var i = 0; i < 10; i++){
		var apiKey = generateRandomCharacterSequence(32,'0123456789abcdefghijklmnopqrstuvwxyz');
		frisby.create('Verify that the api key is something that not easily spoofed/generated.')
			.get("https://api.themoviedb.org/3/movie/550?api_key=" + apiKey)
			.expectStatus(401)
			.expectHeaderContains('content-type', 'application/json')
		.toss();
	}
}

function test11(){
	var requests = [
		function(){
			frisby.create('Verify that a assortment of correct and incorrect requests in quick succession return the proper status code and json object.')
				.get("https://api.themoviedb.org/3/movie/550?api_key=" + keys.v3)
				.expectStatus(200)
				.expectHeaderContains('content-type', 'application/json')
			.toss();
		},
		function(){
			frisby.create('Verify that a assortment of correct and incorrect requests in quick succession return the proper status code and json object.')
				.get("https://api.themoviedb.org/3/movie/a?api_key=" + keys.v3)
				.expectStatus(404)
				.expectHeaderContains('content-type', 'application/json')
			.toss();
		},
		function(){
			frisby.create('Verify that a assortment of correct and incorrect requests in quick succession return the proper status code and json object.')
				.get("https://api.themoviedb.org/3/movie/550?api_key=asdf")
				.expectStatus(401)
				.expectHeaderContains('content-type', 'application/json')
			.toss();			
		}
	]
	for(var i = 0; i < 10; i++){
		requests[Math.floor(Math.random() * requests.length)]();
	}
}

test6();
test11();

