const axios = require('axios');


const getWeather = (lon, lat)=>{
    return new Promise((resolve,reject)=> {
        const url = "http://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat + "&lon=" + lon + "&appid=73120f71d52b0fbd11b9dfbd590215d5";

// Make a request for a user with a given ID
        axios.get(url)
            .then(function (response) {
                // handle success
                //console.log(response.data.list[0].components);
                resolve( response.data.list[0].components)
                // resolve({weather: response.data.list[0].components.co})
            })
                        .catch(function (error) {
                            // handle error
                            //console.log(error);
                            reject({error: "unable to find the location"})
                        });

                }
            )
    }
module.exports = getWeather;

//
// const lat =  6.9387469;
// const lon =79.8541134;
//
//
// const url ="http://api.openweathermap.org/data/2.5/air_pollution?lat="+lat+"&lon="+lon+"&appid=73120f71d52b0fbd11b9dfbd590215d5";
//
// // Make a request for a user with a given ID
// axios.get(url)
//     .then(function (response) {
//         // handle success
//         console.log(response.data.list[0].components);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     });
