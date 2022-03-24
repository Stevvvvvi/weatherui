import { WeatherReducerType } from "../reducers/weatherReducer";

export const weatherErrorReducerMock: WeatherReducerType = {
	loading: false,
	data: null, 
	errorMessage: "Cannot find the coordinate of the City"
};

export const weatherLoadingReducerMock: WeatherReducerType = {
	loading: true,
	data: null, 
	errorMessage: null,
};

export const weatherDataReducerMock: WeatherReducerType = {
	loading: false,
	data: {
		timezone_offset: 39600,
		current:{
			dt: 1648129748,
			temp: 291.35,
			weather:[
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				}
			]
		},
		daily: [
			{
				"dt": 1648173600,
				"temp": {
					"day": 294.4,
				},
				"weather": [
					{
						"id": 501,
						"main": "Rain",
						"description": "moderate rain",
						"icon": "10d"
					}
				],
			}
		]
	}, 
	errorMessage: null,
};