var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');
function TodayWeather (props) {
  return (
    <div className="row" style={styles.todayWeatherContainer}>
      <div className="col-sm-12">
        <div>
          <p style={styles.todayWeatherTemp}>35</p>
          <p style={styles.todayWeatherMetric}>C</p>
        </div>
        <p style={styles.todayWeatherDesc}>Sunny</p>
        <div style={styles.todayWeatherMinmaxContainer}>
          <p style={styles.todayWeatherMin}>Min: 22</p>
          <p style={styles.todayWeatherMax}>Max 26</p>
        </div>
      </div>
      <div className="row" style={styles.todayWeatherAdditionalInfoContainer}>
        <div className="col-sm-6">
          <p>Humidity: 36%</p>
          <p>Precipitation: 0 mm</p>
        </div>
        <div className="col-sm-6">
          <p>Pressure: 767 mm</p>
          <p>Visibility: 16 km</p>
        </div>
      </div>
    </div>
  );
}

module.exports = TodayWeather;
