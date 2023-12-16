
//geo api
const axios = require("axios");

const getGeo = (location)=>{
    return new Promise((resolve,reject)=> {

        const url = "https://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=1&appid=73120f71d52b0fbd11b9dfbd590215d5";

        axios.get(url)
            .then(function (response) {
                // handle success
                //console.log(response.data[0].lon);
                resolve({
                    name: response.data[0].name,
                    lat: response.data[0].lat,
                    lon: response.data[0].lon
                })
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                reject({error:"unable ti find the location"})
            });



    })

}
module.exports = getGeo;
//
// const location = "london";
// const url = "https://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=1&appid=73120f71d52b0fbd11b9dfbd590215d5";
//
// axios.get(url)
//     .then(function (response) {
//         // handle success
//         console.log(response.data[0].lon);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     });

