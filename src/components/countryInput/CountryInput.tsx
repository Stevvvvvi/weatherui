import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityWeatherFromCoodinateAction } from "../../actions/weatherActions";
import { InputButton } from "./CountryInput.style";

const CountryInput=()=>{
	const dispatch = useDispatch();
	const [country,setCountry] = useState("");
	return (
		<div>
			<label htmlFor="country-input">Please type in a country: </label>
			<input type="text" id="country-input" value={country} onChange={(e)=>setCountry(e.currentTarget.value)} />
			<InputButton data-testid="confirm-button" onClick={()=>dispatch(getCityWeatherFromCoodinateAction(country))}>Confirm</InputButton>
		</div>
	);
};

export default CountryInput;