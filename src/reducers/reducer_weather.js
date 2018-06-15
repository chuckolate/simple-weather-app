import { FETCH_WEATHER } from '../actions/index';

/* state is not null because we want to store it in an array */
export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
	/* do not use push because it is mutating state. we need to return a NEW state */
		//return state.concat([action.payload.data]);
		return [ action.payload.data, ...state ]; /* ES6 syntax looks like [ city, city, city ] */
	}
	return state;
}