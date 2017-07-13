var tmdbBaseSuite = require('../tmdbBaseSuite');

exports.TmdbV3BaseSuite = function(name){
	this = new tmdbBaseSuite.TmdbBaseSuite(name);
	this.baseUrl += "3/";
	this.keyString = function(){
		return "?api_key=" + this.keys.v3;
	}
}