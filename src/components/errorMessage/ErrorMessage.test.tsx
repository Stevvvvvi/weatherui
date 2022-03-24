import { cleanup, render } from "@testing-library/react";
import React from "react";
import * as reactRedux from "react-redux"; 
import { weatherErrorReducerMock } from "../../helpers/mockObjects";
import ErrorMessage from "./ErrorMessage";

beforeEach(()=>{
	const useDispatchSpy = jest.spyOn(reactRedux , "useDispatch");
	const useSelectorSpy = jest.spyOn(reactRedux , "useSelector");
	const mockDispatchFn = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatchFn);
	useSelectorSpy.mockReturnValue(weatherErrorReducerMock);
});
afterEach(cleanup);

it("renders ErrorMessage correctly", ()=>{
	const {getByTestId, getByText, container } = render(<ErrorMessage></ErrorMessage>);
	expect(getByText(/coordinate/i).textContent).toBe("Cannot find the coordinate of the City");
});