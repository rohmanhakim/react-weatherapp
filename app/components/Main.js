var React = require('react');
var PropTypes = React.PropTypes;

function Main (props) {
  return (
      <div className="main-container">
        {props.children}
      </div>
  );
}

module.exports = Main;
