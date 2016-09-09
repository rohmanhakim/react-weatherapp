var React = require('react');
var PropTypes = React.PropTypes;

function Forecast (props) {
  return (
      <div>
        {props.place}
      </div>
  );
}

Forecast.propTypes = {
  place: PropTypes.string.isRequired
}

module.exports = Forecast;
