const React = require('react');
const ReactDom = require('react-dom');
const HelloWorldComponent = require('./components/HelloWorldComponent');

ReactDom.render(<HelloWorldComponent />,document.getElementById('app'));
