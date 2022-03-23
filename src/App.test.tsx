import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import * as reactRedux from "react-redux"; 

beforeEach(()=>{
	const useDispatchSpy = jest.spyOn(reactRedux , "useDispatch");
	const mockDispatchFn = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatchFn);
});
afterEach(cleanup);

test("renders learn react link", () => {
	render(<App />);
	//const linkElement = screen.getByText(/learn react/i);
	//expect(linkElement).toBeInTheDocument();
});
