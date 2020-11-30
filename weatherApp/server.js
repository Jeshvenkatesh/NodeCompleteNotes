const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=ac4e8d3f338608900474f0852d6de0f0&query=42,75';

const request = http.request(url,(response) => {
    let data = ''
    response.on('data',(chunk) => {
        data = data + chunk.toString()
    });
    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error',(error)=>{
    console.log('Error =>', error)
});

request.end();

 //  express server...
const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Hello express!')
});

app.get('/help',(req, res) =>{
    // res.send('You will get help here!')
    res.send({
        message : 'you will get help here!'
    })
});

app.get('/about',(req, res) => {
    res.send('<h1>This is about page</h1>')
});

app.get('/weather',(req, res) => {
    res.send({
        forecast :'You will get weather forecast',
        location : 'You will get location'
    })
});

app.listen(3000, () => {
    console.log('server is listening at 3000')
});


