import axios from 'axios';

axios
    .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=8f6763c10d36ecc9fc637f5c667571f7'
    )
    .then(res => {
        console.log(res.data.weather[0].icon);
    });
