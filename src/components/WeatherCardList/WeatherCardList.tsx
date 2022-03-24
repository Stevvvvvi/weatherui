import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VanillaTilt from "vanilla-tilt";
import { RootStateType } from "../../reducers";
import WeatherCard from "../WeatherCard/WeatherCard";
import { CardListContainer } from "./WeatherCardList.style";

const WeatherCardList=()=>{
	const weatherReducer = useSelector((rootState: RootStateType)=>rootState.WeatherReducer);
	useEffect(()=>{
		VanillaTilt.init(document.querySelectorAll<HTMLElement>(".tilt-card") as any, {
			max: 25,
			speed: 400,
			scale: 1.1,
		});
	},[weatherReducer.data]);
	return (
		<CardListContainer>
			{!weatherReducer.loading && weatherReducer.data && !weatherReducer.errorMessage && 
			<div>
				<div className="current-weather-container">
					<h3 aria-label="current-weather">Current Weather</h3>
					<WeatherCard weatherData={weatherReducer.data.current} currentWeather={true} timezoneOffset={weatherReducer.data.timezone_offset} />
				</div>
				<div>
					<h3 aria-label="forecast-weather">Daily Forecast</h3>
					<div className="forecast-weather-container">
						{
							weatherReducer.data.daily?.map((dayData:any, index: number)=>
								<WeatherCard key={"forecast"+index} weatherData={dayData} currentWeather={false} timezoneOffset={weatherReducer.data.timezone_offset}/>
							)
						}
					</div>
				</div>
			</div>}
		</CardListContainer>
	);
};
export default WeatherCardList;