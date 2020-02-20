require('dotenv').config();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAPBOX_API_KEY });

geocodingClient.forwardGeocode({
    query: 'Seattle, WA'
}).send().then(response=>{
    //to get results
    console.log(response.body);
});