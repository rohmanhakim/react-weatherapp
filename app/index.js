const React = require('react');
const ReactDom = require('react-dom');
const HelloWorldComponent = require('./components/HelloWorldComponent');
const routes = require('../app/config/routes');

ReactDom.render(routes,document.getElementById('app'));
