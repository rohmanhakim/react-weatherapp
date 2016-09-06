var React = require('react');
var PropTypes = React.PropTypes;

var HelloWorldComponent = React.createClass({

  render: function() {
    return (
      <div className="text-center">
        <h1>Hello, World!</h1>
      </div>
    );
  }

});

module.exports = HelloWorldComponent;
