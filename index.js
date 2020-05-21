const axios = require('axios');

async function temperature(cidade) {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=8ceb48353bf895add769572636422ae8`).then(
        (response) => {
            console.log(response.data);
        }
    );
}

temperature('Natal');