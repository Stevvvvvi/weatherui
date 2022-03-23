import React, { useEffect } from "react";
import CountryInput from "./components/countryInput/CountryInput";
import { AppContainer } from "./AppContainer.style";
import { GlobalStyles } from "./GlobalStyles.style";
import WeatherCardList from "./components/WeatherCardList/WeatherCardList";

function App() {
	//const dispatch = useDispatch();
	//useEffect(()=>{dispatch(getCityWeatherFromCoodinateAction("London"));},[]);
	return (
		<AppContainer>
			<GlobalStyles />
			<CountryInput />
			<WeatherCardList />
		</AppContainer>
	);
}

export default App;
