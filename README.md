# TMDBTesting


To run this you must do the following:
Clone the repo:
    git clone https://github.com/Ronin11/TMDBTesting

Create a file named keys.json with your API keys in the following format:
    {
        "v3": "6ece1c4cdeb33b6cca3192a541f367ba",
        "v4": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWNlMWM0Y2RlYjMzYjZjY2EzMTkyYTU0MWYzNjdiYSIsInN1YiI6IjU5NWVkMmY5YzNhMzY4MjhhMTBhMjljZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpdczGk8W1yvDsp2NKWk3Ca9iENgN68Igmzmzf__Sj8"
    }

Install Jasmine with npm:

    npm install -g jasmine-node

Download dependencies:

    cd TMDBTesting
    npm install

And execute:

    jasmine-node test_spec.js