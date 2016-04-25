var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench');
var BenchesIndex = require('./components/benches_index');
var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search');

$(document).ready(function () {
	ReactDOM.render (
		<Search />, document.getElementById('content')
	);
});
