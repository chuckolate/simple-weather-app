import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		/* new google.maps.Map creates an embedded google map inside our document. this takes a reference to our html node. find that element and render it on that node */
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return <div ref="map" />
	}
}

/*
	ref lets us have a direct html element that has been rendered on the page. we have have direct reference by doing 'this.ref.map'
*/

export default GoogleMap;