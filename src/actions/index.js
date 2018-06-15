import axios from 'axios';

const API_KEY = 'b3ea21b8450aaaa11a55c340991538e8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

/* do this by convention and for consistency */
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); /* this returns a promise. a promise is a data structure that doesn't actually contain any of our data.*/

	return {
		type: FETCH_WEATHER,
		payload: request /* we are returning the promise as the payload */
	};
}