const weather = require('./utils/weather');
const geo =require('./utils/geo')
// weather(79.8541134, 6.9387469)
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

geo('matara')
.then((data)=>{
    //console.log(data);
    return weather(data.lat, data.lon)
})
    .then((data)=>{
        console.log(data)
    })
.catch((error)=>{
    console.log(error);

})