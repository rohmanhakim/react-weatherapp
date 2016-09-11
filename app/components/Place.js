var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');
function Place (props) {
  return (
    <div className="row" style={styles.placeContainer}>
      {props.place}
    </div>
  );
}

Place.propTypes = {
  place: PropTypes.string.isRequired
}

module.exports = Place;
