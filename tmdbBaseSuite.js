"use strict";
var keys = require('./keys');
var BaseSuite = require('./TMDBTestingSharedLib/baseSuite');

class TmdbBaseSuite extends BaseSuite{
	constructor(name){
		super(name);
		this.keys = keys;
		this.baseUrl = "https://api.themoviedb.org/"; 
	}
}

module.exports = TmdbBaseSuite;