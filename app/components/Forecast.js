var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');
const Spinner = require('../components/Spinner');
const ForecastItem = require('../components/ForecastItem');
const cssStyle = require('../styles/owfont-regular.css');
const TodayWeather = require('../components/TodayWeather');
const Date = require('../components/Date');
const Place = require('../components/Place');
const TodayWeatherIcon = require('../components/TodayWeatherIcon');

function Forecast (props) {
  return (
    props.isLoading === true ?
    <div style={styles.homeContainer}>
      <div style={styles.centerVerticalSpacer}></div>
      <div className="col-sm-12">
        <div className="text-center" style={styles.centerAbsolute}>
          <Spinner />
        </div>
      </div>
    </div>
    :
    <div style={styles.homeContainer}>
      <div className="row">
        <div className="col-sm-6">
          <Date />
          <Place />
          <TodayWeather />
        </div>
        <TodayWeatherIcon />
      </div>
      <div className="row" style={styles.fiveDaysForecastContainer}>
        <div className="col-sm-1"></div>
        {props.forecastData.forecasts.map(function(forecast,index) {
            return <ForecastItem key={index} dayOfWeek={forecast.dayOfWeek} forecastItemData={forecast.forecast} />;
        })}
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

Forecast.propTypes = {
  place: PropTypes.string.isRequired,
  forecastData: PropTypes.object
}

module.exports = Forecast;
