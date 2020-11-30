const request = require('request');

const geoCode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiamVzaHZlbmthdGVzaCIsImEiOiJja2hxNWwyOXkwaDl1MnNyc2V1aGxiOTlwIn0.LA5ZBYJ3TR9VF5qENvzw2g";
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('geocoding services not available', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to fetch location', undefined)
        } else {
            callback(undefined, {
                latitide: response.body.features[0].center[1],
                longititude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geoCode;