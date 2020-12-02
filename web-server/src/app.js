const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname)
console.log(__filename);

const publicDirectoryPath = path.join(__dirname,'../Public');
console.log(publicDirectoryPath);

app.set('view engine','hbs'); //connecting hbs...
app.use(express.static(publicDirectoryPath));

app.get('/',(req,res) => {       // Note: we use res.render() instead of res.send()
    res.render('index',{
        title:'Weather App',
        name:"Venkatesh"
    });
});
app.get('/about',(req, res)=>{
    res.render('about',{
        title:'About Me',
        name:'Venkatesh'
    });
});
app.get('/help',(req, res)=>{
    res.render('help',{
        title:'help page',
        name:'venkatesh'
    });
})
app.get('/weather',(req, res) => {
    res.send({
        forecast :'You will get weather forecast',
        location : 'You will get location'
    });
});

app.listen(3000, () => {
    console.log('server is listening at 3000');
});


// app.get('/',(req, res) => {
//     res.send('Hello express!')
// });

// app.get('/help',(req, res) =>{
//     // res.send('You will get help here!')
//     res.send({
//         message : 'you will get help here!'
//     });
// });

// app.get('/about',(req, res) => {
//     res.send('<h1>This is about page</h1>')
// });