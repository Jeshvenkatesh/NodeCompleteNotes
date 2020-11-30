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

