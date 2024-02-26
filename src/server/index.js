const express = require('express');
const bodyParser = require('body-parser');
// const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js');


dotenv.config();
port = 8000
const app = express();
const key= process.env.API_KEY
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));


console.log(__dirname);

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
console.log(`The Key is ${process.env.API_KEY}`);

let userInput = [];


app.get('/', function(req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});


app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});


app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${key}&url=${userInput}&lang=en`;

    try {
        const response = await fetch(apiURL);
        const mcData = await response.json();
        console.log(mcData);
        res.send(mcData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'An error occurred.' });
    }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(` listening app  on port ${PORT}!`);
});