var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');
const Spinner = require('../components/Spinner');

function Forecast (props) {
  return (
    <div style={styles.homeContainer}>
      <div style={styles.centerVerticalSpacer}></div>
      <div className="col-sm-12">
        <div className="text-center" style={styles.centerAbsolute}>
          <Spinner />
        </div>
      </div>
    </div>
  );
}

Forecast.propTypes = {
  place: PropTypes.string.isRequired
}

module.exports = Forecast;
