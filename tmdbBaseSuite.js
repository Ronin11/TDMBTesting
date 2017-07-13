var keys = require('./keys');
var baseSuite = require('./TMDBTestingSharedLib/baseSuite');

exports.TmdbBaseSuite = function(name){
	this = new baseSuite.BaseSuite(name);
	this.keys = keys;
	this.baseUrl = "https://api.themoviedb.org/"; 
}