import React, { useEffect } from "react";
import CountryInput from "./components/countryInput/CountryInput";
import { AppContainer } from "./AppContainer.style";
import { GlobalStyles } from "./GlobalStyles.style";
import WeatherCardList from "./components/WeatherCardList/WeatherCardList";
import Loading from "./components/loading/Loading";
import ErrorMessage from "./components/errorMessage/ErrorMessage";

function App() {
	//const dispatch = useDispatch();
	//useEffect(()=>{dispatch(getCityWeatherFromCoodinateAction("London"));},[]);
	return (
		<AppContainer>
			<GlobalStyles />
			<CountryInput />
			<Loading />
			<ErrorMessage />
			<WeatherCardList />
		</AppContainer>
	);
}

export default App;
