import React, { useEffect } from "react";
import CountryInput from "./components/countryInput/CountryInput";
import { AppContainer } from "./AppContainer.style";
import { GlobalStyles } from "./GlobalStyles.style";

function App() {
	//const dispatch = useDispatch();
	//useEffect(()=>{dispatch(getCityWeatherFromCoodinateAction("London"));},[]);
	return (
		<AppContainer>
			<GlobalStyles />
			<CountryInput />
		</AppContainer>
	);
}

export default App;
