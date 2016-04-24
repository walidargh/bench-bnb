var React = require('react');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');
var Map = require('./map');
var BenchesIndex = require('./benches_index');

var Search = React.createClass({
	render: function () {
		return (
			<div>
				<Map />
				<Index />
		</div>
	);
	}

});

module.exports = Search;
