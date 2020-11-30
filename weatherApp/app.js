const request = require('request');
const geoCode = require("./utils/geocode");
const forecasts = require("./utils/forecast");
const place = process.argv[2];

if(!place){
   return console.log('Please provide location')
}

geoCode(place, (error, {latitide, longititude, place_name} = {}) => {    //take nothing if  values are passed not yet
    if (error) {
        return console.log('Error : ' + error)
    }
    // console.log(data);
    forecasts(latitide, longititude, (error, forecastdata) => {
        if (error) {
            return console.log('Error : ' + error)
        }
        console.log(forecastdata);
        console.log('place : ' + place_name)
    })
});
