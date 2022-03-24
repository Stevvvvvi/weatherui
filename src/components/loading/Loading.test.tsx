import { cleanup, render } from "@testing-library/react";
import React from "react";
import * as reactRedux from "react-redux"; 
import { weatherLoadingReducerMock } from "../../helpers/mockObjects";
import Loading from "./Loading";

beforeEach(()=>{
	const useDispatchSpy = jest.spyOn(reactRedux , "useDispatch");
	const useSelectorSpy = jest.spyOn(reactRedux , "useSelector");
	const mockDispatchFn = jest.fn();
	useDispatchSpy.mockReturnValue(mockDispatchFn);
	useSelectorSpy.mockReturnValue(weatherLoadingReducerMock);
});
afterEach(cleanup);

it("renders ErrorMessage correctly", ()=>{
	const {getByTestId, getByText, container } = render(<Loading />);
	expect(getByTestId("loading-progress")).toBeInTheDocument;
});