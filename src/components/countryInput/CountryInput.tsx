import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityWeatherFromCoodinateAction } from "../../actions/weatherActions";
import { CountryInputContainer, InputButton } from "./CountryInput.style";

const CountryInput=()=>{
	const dispatch = useDispatch();
	const [country,setCountry] = useState("");
	const handleGetWeatherData=()=>{
		dispatch(getCityWeatherFromCoodinateAction(country));
	};
	const handleKeyDown =(e:any)=>{
		if (e.key==="Enter"){
			handleGetWeatherData();
		}
	};
	return (
		<CountryInputContainer>
			<label htmlFor="country-input">Please type in a country: </label>
			<input type="text" id="country-input" value={country} onKeyDown={handleKeyDown} onChange={(e)=>setCountry(e.currentTarget.value)} />
			<InputButton data-testid="confirm-button" type="submit" onClick={handleGetWeatherData}>Confirm</InputButton>
		</CountryInputContainer>
	);
};

export default CountryInput;