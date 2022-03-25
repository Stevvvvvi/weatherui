import { GetCityCoodinateFailed, GetCityCoodinateRequest, GetCityWeather, GetCityWeatherFailed, GetCityWeatherFulfilled } from "./actionTypes";
export type WeatherActionType = GetCityWeatherType 
                            | GetCityWeatherFulfilledType
                            | GetCityWeatherFailedType
                            | GetCityCoodinateActionType
                            | GetCityCoodinateFailedType;

type GetCityWeatherType = {
    type: typeof GetCityWeather,
    payload: {
        lat: number,
        lon: number,
    }
}
type GetCityWeatherFulfilledType = {
    type: typeof GetCityWeatherFulfilled,
    payload: any
}
type GetCityWeatherFailedType = {
    type: typeof GetCityWeatherFailed,
    payload: any
}

type GetCityCoodinateActionType = {
    type: typeof GetCityCoodinateRequest,
    payload: string
}

type GetCityCoodinateFailedType = {
    type: typeof GetCityCoodinateFailed,
    payload: string
}

  
export const getCityWeatherAction = (lat:number, lon:number): GetCityWeatherType => ({ type: GetCityWeather, payload: {lat: lat, lon: lon} });
export const getCityWeatherFulfilledAction = (payload:any):GetCityWeatherFulfilledType  => ({ type: GetCityWeatherFulfilled, payload });
export const getCityWeatherFailedAction = (message: any): GetCityWeatherFailedType => ({type: GetCityWeatherFailed, payload: message});
export const getCityWeatherFromCoodinateAction = (city:string): GetCityCoodinateActionType => ({ type: GetCityCoodinateRequest, payload: city });
export const getCityCoodinateFailedAction = (message: string): GetCityCoodinateFailedType => ({type: GetCityCoodinateFailed,payload: message});
