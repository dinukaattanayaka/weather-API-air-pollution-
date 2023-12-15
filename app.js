
const axios = require('axios');
const url ="http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=73120f71d52b0fbd11b9dfbd590215d5";

// Make a request for a user with a given ID
axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data.list[0].components);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });