import { GetCityCoodinateFailed, GetCityCoodinateRequest, GetCityWeather, GetCityWeatherFailed, GetCityWeatherFulfilled } from "../actions/actionTypes";
import { WeatherActionType } from "../actions/weatherActions";

export type WeatherReducerType={
    loading: boolean;
    data: any;
    errorMessage: null | string;
}
const initialState: WeatherReducerType={
	loading: false,
	data: null,
	errorMessage: null
};

const WeatherReducer = (state = initialState, action: WeatherActionType) => {
	switch (action.type) {
	case GetCityWeather:
	case GetCityCoodinateRequest:
		return {
			...state,
			loading: true,
			errorMessage: null,
		};
	case GetCityWeatherFulfilled:
		return {
			...state,
			loading: false,
			data: action.payload,
			errorMessage: null,
		};
	case GetCityWeatherFailed:
	case GetCityCoodinateFailed:
		return {
			...state,
			loading: false,
			errorMessage: action.payload,
		};
		//   case ClearCurrentData:
		//     return {
		//       ...state,
		//       loading: false,
		//       errorMessage: null,
		//       data: null,
		//     }
	default:
		return state;
	}
};
export default WeatherReducer;