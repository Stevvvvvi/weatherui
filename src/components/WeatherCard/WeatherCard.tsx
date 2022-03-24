import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../reducers";
import { WeatherCardContainer } from "./WeatherCard.style";
import "../../weatherIcon/weather-icons.min.css";
import { rainFontMapping } from "../../helpers/objects";

const WeatherCard=({weatherData, timezoneOffset, currentWeather}:{weatherData:any, timezoneOffset:number, currentWeather: boolean})=>{
	const weatherDate = convertEpochToSpecificTimezone(weatherData.dt);
	const rainFont = rainFontMapping.find((e)=>e.main==weatherData.weather[0]?.main);
	return (
		<WeatherCardContainer className="tilt-card" backgroundColor={rainFont?.background}>
			<div className="card-text">
				<div>{weatherDate}</div>
				{currentWeather && <div>{convertEpochToCurrentTime(weatherData.dt)}</div>}
				<div className="card-icon">
					<i className={`wi ${rainFont?.weatherFont}`}></i>
				</div>
				<div>
					<div>{weatherData.weather[0]?.description || ""}</div>
					<div className="card-temperature">{(weatherData.temp - 273.15 || weatherData.temp.day - 273.15)?.toFixed(1)} °C</div>
				</div>
				
			</div>
		</WeatherCardContainer>
	);
};

function convertEpochToSpecificTimezone(timeEpoch: number){
	const d = new Date(0);
	d.setUTCSeconds(timeEpoch);
	const returnValue = d.toDateString()?.split(" ");
	returnValue.pop();
	return returnValue.join(" ");
}

function convertEpochToCurrentTime(timeEpoch: number){
	const d = new Date(0);
	d.setUTCSeconds(timeEpoch);
	return d.toTimeString().split(" ")[0];
}


export default WeatherCard;