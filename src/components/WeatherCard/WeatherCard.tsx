import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../reducers";
import { WeatherCardContainer } from "./WeatherCard.style";
import "../../weatherIcon/weather-icons.min.css";
import { rainFontMapping } from "../../helpers/objects";

const WeatherCard=({weatherData, timezoneOffset, currentWeather}:{weatherData:any, timezoneOffset:number, currentWeather: boolean})=>{
	const weatherDate = convertEpochToSpecificTimezone(weatherData.dt, timezoneOffset);
	return (
		<WeatherCardContainer className="tilt-card">
			<div className="card-text">
				<i className={`wi ${rainFontMapping.find((e)=>e.main==weatherData.weather[0]?.main)?.weatherFont}`}></i>
				{weatherData.weather[0]?.main || ""}
				{weatherDate}
			</div>
		</WeatherCardContainer>
	);
};

function convertEpochToSpecificTimezone(timeEpoch: number, offset: number){
	const d = new Date(0);
	d.setUTCSeconds(timeEpoch);
	//const utc = d.getTime() ;  //This converts to UTC 00:00
	//const nd = new Date(utc);
	return d.toLocaleString();
}
export default WeatherCard;