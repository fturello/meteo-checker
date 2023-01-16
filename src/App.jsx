import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles/App.css";

function App() {
	const [cityInfos, setCityInfos] = useState([]);
	const cityName = "Paris";
	const apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
			.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
			)
			.then((res) => res.data())
			.then((data) => {
				console.log("// data ==", data);
				// setCityInfos(data.results)
			});
	}, []);

	const onPressBtn = () => {
		console.log(process.env.REACT_APP_API_KEY);
	};

	return <button onClick={onPressBtn}></button>;
}

export default App;
