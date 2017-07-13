# TMDBTesting


To run this you must do the following:
Clone the repo:

    git clone https://github.com/Ronin11/TMDBTesting

Create a file in the root directory named keys.json with your API keys in the following format:

    {
        "v3": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "v4": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
    
Download and install Node version >= 7.6 and npm here: https://nodejs.org/en/

Download dependencies:

    cd TMDBTesting
    npm install
    git submodule update --init --recursive

And execute:

    npm test
