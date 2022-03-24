import { fireEvent, render } from "@testing-library/react";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import App from "./App";
import defaultStore from "./store/configureStore";

describe("testing store update in redux", ()=>{
	jest.setTimeout(5000);
	it("should render store content correctly", async ()=>{
		
		const {getByTestId, getByText, container, getByLabelText, findByText, getAllByTestId } = render(
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
		expect(getByTestId("loading-progress")).toBeInTheDocument;
		await new Promise((r) => setTimeout(r, 4000));
		expect(getAllByTestId("weather-date").length).toBe(9);
	});
});
