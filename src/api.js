import 'whatwg-fetch';

const CITY_IDS = [
    1609350, 1614295, 1583992, 1846266, 1153671, 1153669, 1880252, 1151254, 1152633, 1822214, 1821306, 1831142, 1581130, 1566083, 1835848, 1838524, 1580541,
];

export const getWeather = () => (
    fetch(`http://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&units=metric&APPID=2aedec2b406f52785990885fab552198`)
        .then(response => response.json())
        .then(json => json.list)
        .then(list => list.map(item => ({
            place: item.name,
            time: item.dt,
            country: item.sys.country,
            temp: item.main.temp,
            desc: item.weather[0].main,
        }))));
