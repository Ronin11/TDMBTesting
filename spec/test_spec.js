var frisby = require('frisby');

var keys = require('../keys');


console.log(keys);
frisby.create('Test test')
    .get("https://api.themoviedb.org/3/movie/550?api_key=" + keys.v3)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
.toss()