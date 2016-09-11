const axios = require('axios');

const URL = "http://data.okfn.org/data/core/country-list/r/data.json";

function getCountryCodes(){
  return axios.get(URL)
  .then(function(response)
  {
    return response.data;
  })
  .catch(function(error){
    console.log("Error in getCountryCodes : ", error);
  });
}

var countryCodeHelper = {
  getNameOfCountry: function (code) {
    return getCountryCodes().then(function (response) {
      var filtered = response.filter(function (country){
        return country.Code === code;
      });
      return filtered[0].Name;
    });
  }
}

module.exports = countryCodeHelper;
