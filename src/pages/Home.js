import React, { useEffect, useState } from "react";
import "../styles/style.css";

import INFO from "../data/info";
import SplitButton from "../components/SplitButton";

const Home = () => {
	let [imageUrl, setImageUrl] = useState("");
	let [page, setPage] = useState(1);
	const [error, setError] = useState(null);

	const searchText = "coding";

	const unsplashApiKey =
		process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
	let initialURL = `https://api.unsplash.com/search/photos?query=${searchText}&page=${page}&per_page=1`;

	// fetching images from pexels API
	const fetchImage = async () => {
		try {
			let response = await fetch(initialURL, {
				headers: {
					Authorization: `Client-ID ${unsplashApiKey}`,
				},
			});
			if (!response.ok) {
				throw new Error("Fail to fetch image");
			}
			let data = await response.json();
			// console.log(data);
			data = data.results[0];
			setImageUrl(data.urls.raw);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		fetchImage();
		setPage(Math.floor(Math.random() * 50));
	}, []);

	return (
		<div className="home-container">
			<div
				className="picture-container"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content-container">
				<h1 className="content-title">{INFO.home.title}</h1>
				<p className="content-text">
					{INFO.home.description}
				</p>
				<SplitButton />
			</div>
		</div>
	);
};

export default Home;
