var React = require('react');
var PropTypes = React.PropTypes;
const styles = require('../styles/styles');

function Spinner (props) {

  return (
    <div>
      <div style={styles.spinnerBox}>
        <div style={styles.spinnerCircle1}></div>
        <div style={styles.spinnerCircle2}></div>
        <div style={styles.spinnerCircle}></div>
      </div>
    </div>
  );
}

module.exports = Spinner;
