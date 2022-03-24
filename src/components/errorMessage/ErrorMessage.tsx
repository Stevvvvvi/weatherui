import { useSelector } from "react-redux";
import { RootStateType } from "../../reducers";
import React from "react";

const ErrorMessage=()=>{
	const weatherReducer = useSelector((rootState: RootStateType)=>rootState.WeatherReducer);
	return (
		<> 
			{weatherReducer.errorMessage && <div><h2>{weatherReducer.errorMessage}</h2></div>}
		</>
	);
};

export default ErrorMessage;