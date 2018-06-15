import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		/* this line says 'this' (our instance of search bar), has a function called onInputChange. bind that function to this (SearchBar) and replace onInputChange with this new bound instance of this function. TLDR take existing function, bind it to this, and replace existing function with it, similar to overwriting. */
		this.onInputChange = this.onInputChange.bind(this);
		/* if we are passing a callback method wiith 'this', we need to bind the context */
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		//console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		/* fetch weather data */
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
