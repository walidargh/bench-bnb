var React = require('react');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');

var BenchesIndex = React.createClass({
	getInitialState: function () {
		return {benches: BenchStore.all()};
	},

	// _onChange: function () {
	// 	ClientActions.fetchBenches();
	// },

	// componentDidMount: function () {
	// 	BenchStore.addListener(this._onChange);
	// },

	render: function () {
		console.log('hello');
		return <div>Hello</div>;
	}
});

module.exports = BenchesIndex;
