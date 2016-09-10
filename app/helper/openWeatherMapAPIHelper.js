const axios = require('axios');

//api.openweathermap.org/data/2.5/forecast?q=las vegas,nevada&mode=json&APPID=7f264597e2aac98a65137abcdee73a3f
const APPID = "7f264597e2aac98a65137abcdee73a3f";
const BASEURL = "http://api.openweathermap.org/data/2.5";
const URI_FORECAST = "/forecast?";
const PARAM_QUERY = "q=";
const PARAM_MODE = "mode=";
const PARAM_APPID = "APPID=";
const PARAM_UNITS = "units="

function getFiveDaysForecastRequest(place) {
  return axios.get(BASEURL + URI_FORECAST + PARAM_QUERY + place + "&" + PARAM_MODE + "&" + PARAM_UNITS + "metric" + "&" + PARAM_APPID + APPID)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("Error in getFiveDaysForecast : ",error);
    });
}

var openWeatherMapAPIHelper = {
  getFiveDaysForecast: function (place) {
    return getFiveDaysForecastRequest(place);
  }
}

module.exports = openWeatherMapAPIHelper;
