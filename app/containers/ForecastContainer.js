var React = require('react');
var PropTypes = React.PropTypes;
const Forecast = require('../components/Forecast');
const injectStyle = require('../helper/injectStyle');
const openWeatherMap = require('../helper/openWeatherMapAPIHelper');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      place: this.props.location.state.place,
      forecastData: {}
    };
  },
  componentDidMount: function() {
      const keyframesStyle = `
      @keyframes sk-bouncedelay {
        0%, 80%, 100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        } 40% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
        }
      }
    `;
    injectStyle(keyframesStyle);
    openWeatherMap.getFiveDaysForecast(this.state.place)
      .then(function (response) {
        this.setState({
          isLoading: false,
          place: response.city,
          forecastData: response
        });
        console.log(response);
      }.bind(this));
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        place={this.state.place}
        forecastData={this.state.forecastData}/>
    );
  }

});

module.exports = ForecastContainer;
