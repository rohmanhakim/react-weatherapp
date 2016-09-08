const React = require('react');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;

const Main = require('../components/Main');
const HomeContainer = require('../containers/HomeContainer');
const ForecastContainer = require('../containers/ForecastContainer');

var routes = (
  <Router history={ReactRouter.hashHistory}>
  <Route path='/' component={Main}>
    <IndexRoute component={HomeContainer}/>
    <Route path='/forecast' component={ForecastContainer}/>
  </Route>
</Router>
);

module.exports = routes;
