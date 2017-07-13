"use strict";
var TmdbBaseSuite = require('../tmdbBaseSuite');

class TmdbV3BaseSuite extends TmdbBaseSuite{
	constructor(name){
		super(name);
		this.urlFooter = "?api_key=" + this.keys.v3;
		delete this.keys;
		this.baseUrl += "3/";
	}
}

module.exports = TmdbV3BaseSuite;