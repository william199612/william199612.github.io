import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import INFO from "../data/info";
import { fetchUnsplashImage } from "../services/unsplashAPI";
import GenerateButton from "../components/GenerateButton";

const Home = ({ setError }) => {
	const [imageUrl, setImageUrl] = useState("");
	const [page, setPage] = useState(1);

	useEffect(() => {
		// console.log("home useEffect... page:", page);
		fetchUnsplashImage("coding", page)
			.then((data) => setImageUrl(data.urls.raw))
			.catch((err) => {
				console.error(
					"Error fetching GitHub user data: ",
					err
				);
				setError(err);
			});
	}, [page]);

	return (
		<div className="home-container">
			<div
				className="picture-container"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content-container">
				<div className="text-wrapper">
					<Typography variant="h4">
						{INFO.home.title}
					</Typography>
					<Typography variant="subtitle1">
						{INFO.home.description}
					</Typography>
					<GenerateButton
						route="home"
						page={page}
						setPage={setPage}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
