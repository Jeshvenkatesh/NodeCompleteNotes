const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

console.log(__dirname)
// console.log(__filename);

const publicDirectoryPath = path.join(__dirname,'../Public');
//defining views path if we gave diff name like 'template' instead of 'views'
const viewsPath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');

app.set('views',viewsPath)
app.set('view engine','hbs'); //connecting hbs...
hbs.registerPartials(partialsPath);   // registering partials...

app.use(express.static(publicDirectoryPath));

app.get('/',(req,res) => {       // Note: we use res.render() instead of res.send()
    res.render('index',{
        title:'Weather App',
        name:"Created By Venkatesh"
    });
});
app.get('/about',(req, res)=>{
    res.render('about',{
        title:'About Me',
        name:'Created by Venkatesh'
    });
});
app.get('/help',(req, res)=>{
    res.render('help',{
        title:'Help page',
        name:' Created by venkatesh'
    });
})
app.get('/weather',(req, res) => {
    res.send({
        forecast :'You will get weather forecast',
        location : 'You will get location'
    });
});

app.get('/help/*',(req,res) => {
    // res.send('Help article not found')
    res.render('helpError',{
        message : "This is article is not found"
    })
})

app.get('*',(req,res) => {
    // res.send('<h4>page not found</h4>');
    res.render('404',{
        404 : 'Page not found'
    })
})
app.listen(3000, () => {
    console.log('server is listening at 3000');
});

// Note: add extentions to it nodemon src/app.js -e js,hbs

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