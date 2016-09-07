var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');

function Home (props) {
  return (
    <div className="jumbotron row" style={styles.homeContainer}>
      <div style={styles.homeSpacer}></div>
      <div className="col-sm-12">
        <div className="row text-center">
          <span style={styles.homeTitle}>
            <h1>Enter a City and State</h1>
          </span>
          <br/>
          <div className="col-sm-4"></div>
          <div className="form-group col-sm-4 text-center">
            <input type="text" className="form-control" placeholder="Eg. Salt Lake City, Utah"/>
            <br/>
            <button className="btn btn-lg btn-success">Get Weather</button>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}

module.exports = Home;
