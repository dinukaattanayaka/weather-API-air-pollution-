const express = require('express');

const weather = require('./utils/weather');
const geo =require('./utils/geo');

const app = express();
// weather(79.8541134, 6.9387469)
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// geo('matara')
// .then((data)=>{
//     //console.log(data);
//     return weather(data.lat, data.lon)
// })
//     .then((data)=>{
//         console.log(data)
//     })
// .catch((error)=>{
//     console.log(error);
//
// })

app.get('/' , (req,res)=>{
    res.send("welcome home")
});

app.get('/about' , (req,res)=> {
    res.send("about page")
});
app.get('/weather' , (req,res)=> {
    if (!req.query.address) {
        res.send("address not found")
    }
    geo(req.query.address)
.then((data)=>{
    //console.log(data);
    return weather(data.lat, data.lon)
})
    .then((data)=>{
       res.send(data);
    })
.catch((error)=>{
    res.send(error);

})


});
app.get('*' , (req,res)=> {
    res.send("page not found")
})
app.listen(3000, ()=>console.log('server is on port 3000'))