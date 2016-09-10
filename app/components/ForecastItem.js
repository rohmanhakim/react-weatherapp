var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');

function ForecastItem (props) {
  return (
    <div className="col-sm-2 text-center" style={styles.forecastItem}>
      <i className="owf owf-803" style={styles.forecastIcon}></i>
      <p>Mon</p>
      <p style={styles.forecastTextTemp}>27 C</p>
    </div>
  );
}

module.exports = ForecastItem;
