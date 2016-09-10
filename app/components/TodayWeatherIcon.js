var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');

function TodayWeatherIcon (props) {
  return (
    <div className="col-sm-6" style={styles.todayWeatherIconContainer}>
      <i className="owf owf-801" style={styles.todayWeatherIcon}></i>
    </div>
  );
}

module.exports = TodayWeatherIcon;
