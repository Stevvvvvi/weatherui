import React from "react";
import ReactDOM from "react-dom";
import CountryInput from "./CountryInput";
import * as reactRedux from "react-redux"; 
import { cleanup, fireEvent, render } from "@testing-library/react";

beforeEach(()=>{
	const useDispatchSpy = jest.spyOn(reactRedux , "useDispatch");
	const mockDispatchFn = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatchFn);
});
afterEach(cleanup);

it("renders CountryInput correctly", ()=>{
	const {getByTestId, getByText, container } = render(<CountryInput></CountryInput>);
	expect(getByTestId("confirm-button")).toHaveTextContent("Confirm");
	expect(getByText(/Please/i).textContent).toBe("Please type in a country: ");
	expect(container.querySelector("input")).toHaveAttribute("type","text");
});

it("input change should reflect correctly", ()=>{
	const {getByLabelText} = render(<CountryInput />);
	const inputField = getByLabelText("country-input");
	expect(inputField).toBeInTheDocument();
	fireEvent.change(inputField, {target:{value:"hello"}});
	expect(inputField).toHaveValue("hello");
});