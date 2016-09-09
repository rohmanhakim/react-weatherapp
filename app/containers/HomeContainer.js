var React = require('react');
var PropTypes = React.PropTypes;
const Home = require('../components/Home');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      place: ""
    };
  },
  onPlaceChange: function(e) {
    this.setState({
      place: e.target.value
    });
  },
  onSubmitPlace: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: "/forecast",
      state: {
        place: this.state.place
      }
    });
  },
  render: function() {
    return (
      <Home onSubmitPlace={this.onSubmitPlace}
        onPlaceChange={this.onPlaceChange}
        place={this.state.place}/>
    );
  }

});

module.exports = HomeContainer;
