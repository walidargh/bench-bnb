var React = require('react');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');

var Map = React.createClass({
	render: function () {
		return (
			<div className="map" ref="map"></div>
		);
	}
});

module.exports = Map;
