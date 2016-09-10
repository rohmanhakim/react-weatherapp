var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');
function Place (props) {
  return (
    <div className="row" style={styles.placeContainer}>
      Tokyo, Japan
    </div>
  );
}

module.exports = Place;
