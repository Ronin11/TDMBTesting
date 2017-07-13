"use strict";
var TmdbBaseSuite = require('../tmdbBaseSuite');

class TmdbV4BaseSuite extends TmdbBaseSuite{
	constructor(name){
		super(name);
		this.urlFooter = "?api_key=" + this.keys.v4;
		delete this.keys;
		this.baseUrl += "4/";
	}
}

module.exports = TmdbV4BaseSuite;