import { cleanup, render } from "@testing-library/react";
import React from "react";
import * as reactRedux from "react-redux"; 
import { weatherDataReducerMock, weatherLoadingReducerMock } from "../../helpers/mockObjects";
import WeatherCard from "./WeatherCard";


afterEach(cleanup);

it("renders weathercard correctly", ()=>{
	const {getByTestId, getByText, container } = render(<WeatherCard weatherData={weatherDataReducerMock.data.current} timezoneOffset={weatherDataReducerMock.data.timezoneOffset} currentWeather={true} />);
	expect(getByTestId("weather-date")).toHaveTextContent("Fri Mar 25");
	expect(getByTestId("weather-icon")).toHaveClass("wi wi-day-cloudy-high");
	expect(getByTestId("current-time")).toHaveTextContent("00:49:08");
	expect(getByTestId("weather-description")).toHaveTextContent("overcast clouds");
	expect(getByTestId("card-temperature")).toHaveTextContent("18.2 °C");
});