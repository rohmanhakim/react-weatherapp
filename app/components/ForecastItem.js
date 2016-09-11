var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');

function ForecastItem (props) {
  return (
    <div className="col-sm-2 text-center" style={styles.forecastItem}>
      <i className={"owf owf-" + props.forecastItemData[0].weatherId} style={styles.forecastIcon}></i>
      <p>{props.dayOfWeek}</p>
      <p style={styles.forecastTextTemp}>{props.forecastItemData[0].temp}&deg;C</p>
    </div>
  );
}

ForecastItem.propTypes = {
  dayOfWeek: PropTypes.string,
  forecastItemData: PropTypes.object
}

module.exports = ForecastItem;
