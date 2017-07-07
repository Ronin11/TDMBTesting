# TMDBTesting


To run this you must do the following:
Clone the repo:

    git clone https://github.com/Ronin11/TMDBTesting

Create a file in the root directory named keys.json with your API keys in the following format:

    {
        "v3": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "v4": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }

Install Jasmine with npm:

    npm install -g jasmine-node

Download dependencies:

    cd TMDBTesting
    npm install

And execute:

    jasmine-node test_spec.js