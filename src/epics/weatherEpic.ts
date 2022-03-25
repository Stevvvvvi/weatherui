import { Action, AnyAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GetCityCoodinateRequest, GetCityWeather } from "../actions/actionTypes";
import { getCityCoodinateFailedAction, getCityWeatherAction, getCityWeatherFailedAction, getCityWeatherFulfilledAction } from "../actions/weatherActions";
import { encodeURIAndComponent } from "../helpers/helperFunctions";
import { RootEpic } from ".";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getCityWeatherEpic:RootEpic = (action$) => action$.pipe(
	ofType(GetCityWeather),
	mergeMap(action =>
		ajax.getJSON(encodeURIAndComponent(`${baseUrl}/data/2.5/onecall?lat=${action.payload?.lat}&lon=${action.payload?.lon}&exclude=hourly,minutely&cnt=5&appid=${apiKey}`)).pipe(
			map(response => getCityWeatherFulfilledAction(response)),
			catchError(message => of(getCityWeatherFailedAction(message))),
		)
	)
);

export const getCityCoordinateEpic: RootEpic = (action$: Observable<AnyAction>)=>action$.pipe(
	ofType(GetCityCoodinateRequest),
	mergeMap(action =>
		ajax.getJSON<{name: string, lat:number, lon:number}[]>(encodeURIAndComponent(`${baseUrl}/geo/1.0/direct?q=${action.payload}&limit=5&appid=${apiKey}`)).pipe(
			map((response)=>getCityWeatherAction(response[0].lat, response[0].lon)),
			catchError(message => of(getCityCoodinateFailedAction("Cannot find the coordinate of the City"))),
		)
	)
);

export default [getCityWeatherEpic, getCityCoordinateEpic];