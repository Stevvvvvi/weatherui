import { cleanup, render } from "@testing-library/react";
import React from "react";
import * as reactRedux from "react-redux"; 
import { weatherDataReducerMock, weatherLoadingReducerMock } from "../../helpers/mockObjects";
import WeatherCardList from "./WeatherCardList";

beforeEach(()=>{
	const useDispatchSpy = jest.spyOn(reactRedux , "useDispatch");
	const useSelectorSpy = jest.spyOn(reactRedux , "useSelector");
	const mockDispatchFn = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatchFn);
	useSelectorSpy.mockReturnValue(weatherDataReducerMock);
});
afterEach(cleanup);

it("renders weatherCardList correctly", ()=>{
	const {getByTestId, getByText, container, getAllByTestId, getByLabelText } =render(<WeatherCardList />);
	expect(getAllByTestId("weather-date").length).toBe(2);
	expect(getAllByTestId("weather-date")[0]).toHaveTextContent("Fri Mar 25");
	expect(getAllByTestId("weather-date")[1]).toHaveTextContent("Fri Mar 25");
	expect(getAllByTestId("weather-icon")[0]).toHaveClass("wi wi-day-cloudy-high");
	expect(getAllByTestId("weather-icon")[1]).toHaveClass("wi wi-day-rain");
	expect(getByLabelText("current-weather")).toHaveTextContent("Current Weather");
	expect(getByLabelText("forecast-weather")).toHaveTextContent("Daily Forecast");
});