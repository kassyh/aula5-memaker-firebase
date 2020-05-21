const functions = require('firebase-functions');
const axios = require('axios');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloworld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.tempRecife = functions.https.onRequest(async(request, response) => {
    tempJSON = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=recife&appid=8ceb48353bf895add769572636422ae8`);
    tempKelvin = tempJSON.data.main.temp;
    tempCelcius = tempKelvin - 273;
    response.send(tempCelcius);
});