var React = require('react');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');

var Map = React.createClass({
  getInitialState: function () {
    return {markers: []};
  },
  createMarker: function (position) {
    var marker = new google.maps.Marker({position: position, map: this.map});
    return marker;
  },
  addMarkers: function (benches) {
    var self = this;
    var markers = [];
    Object.keys(benches).forEach(function (benchID) {
      var position = {lat: benches[benchID].lat, lng: benches[benchID].lng};
      var marker = self.createMarker(position);
      markers.push(marker);
    });
    this.setState({markers: markers});
  },
  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    google.maps.event.addListener(this.map, 'idle', ClientActions.fetchBenches);
		BenchStore.addListener(this._onChange);
	},

  _onChange: function () {
    this.addMarkers(BenchStore.all());
  },
	render: function () {
		return (
			<div className="map" ref="map"></div>
		);
	}
});

module.exports = Map;
