var React = require('react');
var PropTypes = React.PropTypes;
const Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <Forecast place={this.props.location.state.place} />
    );
  }

});

module.exports = ForecastContainer;
