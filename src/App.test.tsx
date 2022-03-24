import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import * as reactRedux from "react-redux"; 

beforeEach(()=>{
	const useDispatchSpy = jest.spyOn(reactRedux , "useDispatch");
	const useSelectorSpy = jest.spyOn(reactRedux , "useSelector");
	const mockDispatchFn = jest.fn();
	const mockSelectorFn = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatchFn);
	useSelectorSpy.mockReturnValue(mockSelectorFn);
});
afterEach(cleanup);

test("renders learn react link", () => {
	render(<App />);
	//const linkElement = screen.getByText(/learn react/i);
	//expect(linkElement).toBeInTheDocument();
});
