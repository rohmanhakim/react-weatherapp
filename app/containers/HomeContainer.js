var React = require('react');
var PropTypes = React.PropTypes;
const Home = require('../components/Home');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      location: ""
    };
  },
  onLocationChange: function(e) {
    this.setState({
      location: e.target.value
    });
  },
  onSubmitPlace: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: "/forecast",
      state: {
        location: this.state.location
      }
    });
  },
  render: function() {
    return (
      <Home onSubmitPlace={this.onSubmitPlace}
        onLocationChange={this.onLocationChange}
        location={this.state.location}/>
    );
  }

});

module.exports = HomeContainer;
