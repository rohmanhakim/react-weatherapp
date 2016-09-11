const axios = require('axios');
const countryCodeHelper = require('./countryCodeHelper');

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
      return  constructForecastResponse(response.data);
    })
    .catch(function (error) {
      console.log("Error in getFiveDaysForecast : ",error);
    });
}

function dayOfMonth(dttxt){
  return parseInt(dttxt.substr(8,2));
}

function dayOfWeek(dttxt){
  // using Zeller’s algorithm
  // info : https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week#Zeller.E2.80.99s_algorithm
  var date = dttxt.substr(0,10);
  var d = parseInt(date.substr(8,2));
  var weekTable = {
    0:"Saturday",
    1:"Sunday",
    2:"Monday",
    3:"Tuesday",
    4:"Wednesday",
    5:"Thursday",
    6:"Friday",
  }
  var shiftMonth = function(month){
      return month === 1 || month === 2 ? 12 + month : month;
  };

  var m = shiftMonth(parseInt(date.substr(5,2)));
  var y = parseInt(date.substr(2,2));
  var c = parseInt(date.substr(0,2));
  var w = (d + (13 * (m + 1) / 5) + y + (y/4) + (c/4) - (2 * c)) % 7;
  return weekTable[w];
}

function extractDate(dttxt){
  return dttxt.split(" ")[0];
}

function extractTime(dttxt){
  return dttxt.substr(11,5);
}

function getListOfDays(data){
  return data.filter(function (d,index) {
    var prev = index > 0 ? extractDate(data[index-1].dt_txt) : "";
    return extractDate(d.dt_txt) !== prev;
  });
}

function extractForecastData(data,dttxt){
  var _dayOfWeek = dayOfWeek(dttxt);
  var _dayOfMonth = dayOfMonth(dttxt);
  var _forecast = [];
  for(i = 0; i < data.length; i++){
    if(dayOfMonth(data[i].dt_txt) == _dayOfMonth){
      _forecast.push(
        {
          time: extractTime(data[i].dt_txt),
          weather: data[i].weather[0].main,
          weatherId: data[i].weather[0].id,
          weatehrDesc: data[i].weather[0].description,
          temp: data[i].main.temp,
          maxTemp: data[i].main.temp_max,
          minTemp: data[i].main.temp_min,
          humidity: data[i].main.humidity,
          pressure: data[i].main.pressure,
          groundLevel: data[i].main.grnd_level,
          seaLevel: data[i].main.sea_level,
          rain: data[i].rain,
          clouds: data[i].clouds.all,
          windSpeed: data[i].wind.speed,
          windDirection: data[i].wind.deg
        }
      )
    }
  }
  return {
    dayOfWeek: _dayOfWeek,
    forecast: _forecast
  };
}

function filterForecast(data){
  var fiveDaysData = getListOfDays(data);
  return fiveDaysData.map(function(d){
    return extractForecastData(data,d.dt_txt);
  });
}

function constructForecastResponse(response){
  return {
    city: response.city.name,
    countryCode: response.city.country,
    countryName: "",
    forecasts: filterForecast(response.list)
  }
}

var openWeatherMapAPIHelper = {
  getFiveDaysForecast: function (place) {
    return getFiveDaysForecastRequest(place)
    .then(function (response){
      return countryCodeHelper.getNameOfCountry(response.countryCode)
        .then(function (countryNameResponse){
          response.countryName = countryNameResponse;
          return response;
        });
    });
  }
}

module.exports = openWeatherMapAPIHelper;
