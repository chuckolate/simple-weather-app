import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		/* ES6 syntax to get lon and lat variables */
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K"/></td>
				<td><Chart data={pressures} color="red" units="hpa" /></td>
				<td><Chart data={humidities} color="blue" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hpa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	};
}

/*  ES5:
	function mapStateToProps(state) {
		return { weather: state.weather };
	}
	ES6 below
*/
function mapStateToProps({ weather }) {
	return { weather };
}

/* export connected version */
export default connect(mapStateToProps)(WeatherList);