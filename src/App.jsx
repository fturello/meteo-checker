import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles/App.module.css";

function App() {
	const [cityInfos, setCityInfos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	let cityName = "Paris";
	const apiKey = import.meta.env.VITE_API_KEY;

	// console.log("cityInfos ==", cityInfos);

	useEffect(() => {
		axios
			.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
			)
			.then((res) => res.data)
			.then((data) => {
				setCityInfos(data[0]);
			});
	}, []);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted with input value:", inputValue);
		cityName = inputValue;
		setInputValue("");
	};

	return (
		<>
			<h1 className={styles.title}>⛅ Meteo Checker ⛅</h1>
			<div className={styles.container}>
				<h1 className={styles["city-infos"]}>
					{cityInfos.name}
					<span className={styles.state}>, {cityInfos.state},</span>
					<span className={styles.country}> {cityInfos.country}</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='type city name 🔎'
						value={inputValue}
						className={styles.input}
						onChange={handleChange}
					/>
				</form>
			</div>
		</>
	);
}

export default App;
