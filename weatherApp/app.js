const request = require('request');
const geoCode = require("./utils/geocode");
const forecasts = require("./utils/forecast");
const place = process.argv[2];

if(!place){
   return console.log('Please provide location')
}

geoCode(place, (error, data) => {
    if (error) {
        return console.log('Error : ' + error)
    }
    // console.log(data);
    forecasts(data.latitide, data.longititude, (error, forecastdata) => {
        if (error) {
            return console.log('Error : ' + error)
        }
        console.log(forecastdata);
    })
});
