var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench');
var BenchesIndex = require('./components/benches_index');
var React = require('react');
var ReactDOM = require('react-dom');

$(document).ready(function () {
	ReactDOM.render (
		<Search />, document.getElementById('content')
	);
});
