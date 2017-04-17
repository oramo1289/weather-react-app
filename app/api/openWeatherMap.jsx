const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0050f2a4c616323aa0a9eb8a5d1cd6df&units=metric';


// 0050f2a4c616323aa0a9eb8a5d1cd6df
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then((res)=>{
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (res)=>{
      throw new Error(res.data.message);
    });
  }
};
