const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac4e8d3f338608900474f0852d6de0f0&query=' + latitude + ',' + longitude + '&units=f';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('not available', undefined)
        } else if (response.body.error) {
            callback('Error', undefined)
        } else {
            callback(undefined, {
                feelslike: response.body.current.feelslike,
                temperature: response.body.current.temperature,
            })
        }
    })
}
module.exports = forecast;