import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../reducers";
import { LoadingContainer } from "./Loading.style";

const Loading=()=>{
	const weatherReducer = useSelector((rootState: RootStateType)=>rootState.WeatherReducer);
	return (
		<> 
			{weatherReducer.loading && <LoadingContainer></LoadingContainer>}
		</>
	);
};

export default Loading;