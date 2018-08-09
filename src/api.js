import 'whatwg-fetch';

const cityWeather = fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2aedec2b406f52785990885fab552198')
    .then(response => response.json())
    .then(json => console.log(json));