const PORT = 8000
const axios = require("axios");
const express = require("express")
const cors = require("cors")
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    }

    axios.request(options).then(function (response) {
	    console.log(response.data);
        res.json(response.data[0])
    }).catch(function (error) {
	    console.error(error);
    })
})

app.listen(PORT, () => console.log('Server running on port ' + PORT))
