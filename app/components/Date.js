var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');
function Date (props) {
  return (
    <div className="row" style={styles.dateContainer}>
      6 August 2016
    </div>
  );
}

module.exports = Date;
