import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../reducers";
import { WeatherCardContainer } from "./WeatherCard.style";
import "../../weatherIcon/weather-icons.min.css";

const WeatherCard=({weatherData, timezoneOffset}:{weatherData:any, timezoneOffset:number})=>{
	return (
		<WeatherCardContainer className="tilt-card">
			<i className="wi wi-night-sleet"></i>
			{weatherData.weather[0]?.main || ""}
		</WeatherCardContainer>
	);
};
export default WeatherCard;