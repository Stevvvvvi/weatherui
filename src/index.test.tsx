import { fireEvent, render } from "@testing-library/react";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import App from "./App";
import defaultStore from "./store/configureStore";

describe("testing store update", ()=>{
	jest.setTimeout(3000);
	it("should render store content correctly", async ()=>{
		
		const {getByTestId, getByText, container, getByLabelText, findByText } = render(
			<Provider store={defaultStore}>
				<App />
			</Provider>
		);
		const confirmButton = getByTestId("confirm-button");
		const countryInput = getByLabelText("country-input");
	
		expect(confirmButton).toHaveTextContent("Confirm");
		expect(countryInput).toBeInTheDocument;
		fireEvent.change(countryInput, {target:{value:"Sydney"}});
		fireEvent.click(confirmButton);
		//const currentWeatherLabel = getByLabelText("current-weather");
		await new Promise(()=>setTimeout(async () => {
			const currentWeatherLabel = await findByText(/Current/i);
			expect(currentWeatherLabel).toHaveTextContent("Current Weather");
			const forecastWeatherLabel = await findByText(/Forecast/i);
			expect(forecastWeatherLabel).toHaveTextContent("Dail Forecast");
		}, 500));
	
	});
});
