import React, { useState, useEffect } from "react";
// import { Typography } from "@mui/material";

import { fetchUnsplashImage } from "../services/unsplashAPI";
import GenerateButton from "../components/GenerateButton";
import ContactForm from "../components/ContactFrom";
import INFO from "../data/info";

export default function About({ error, setError }) {
	const [firstImg, setFirstImg] = useState("");
	const [firstPage, setFirstPage] = useState(1);

	const [secondImg, setSecondImg] = useState("");
	const [secondPage, setSecondPage] = useState(1);

	const [thirdImg, setThirdImg] = useState("");
	const [thirdPage, setThirdPage] = useState(1);

	const [forthImg, setForthImg] = useState("");
	const [forthPage, setForthPage] = useState(1);

	const [fifthImg, setFifthImg] = useState("");
	const [fifthPage, setFifthPage] = useState(1);

	useEffect(() => {
		fetchUnsplashImage("greeting", firstPage)
			.then((data) => setFirstImg(data.urls.raw))
			.catch((err) => {
				console.error(
					"Error fetching GitHub user data: ",
					err
				);
				setError(err);
			});
		fetchUnsplashImage("sofware developer", secondPage)
			.then((data) => setSecondImg(data.urls.raw))
			.catch((err) => {
				console.error(
					"Error fetching GitHub user data: ",
					err
				);
				setError(err);
			});
		fetchUnsplashImage("story", thirdPage)
			.then((data) => setThirdImg(data.urls.raw))
			.catch((err) => {
				console.error(
					"Error fetching GitHub user data: ",
					err
				);
				setError(err);
			});
		fetchUnsplashImage("coding", forthPage)
			.then((data) => setForthImg(data.urls.raw))
			.catch((err) => {
				console.error(
					"Error fetching GitHub user data: ",
					err
				);
				setError(err);
			});
		fetchUnsplashImage("passion", fifthPage)
			.then((data) => setFifthImg(data.urls.raw))
			.catch((err) => {
				console.error(
					"Error fetching GitHub user data: ",
					err
				);
				setError(err);
			});
	}, [
		firstPage,
		secondPage,
		thirdPage,
		forthPage,
		fifthPage,
	]);

	return (
		<div className="page-container">
			<div className="title-section">
				<h1 className="content-title">
					{INFO.about.title}
				</h1>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={firstImg}
								alt=""
							/>
						</div>
						<GenerateButton
							route="about"
							page={firstPage}
							setPage={setFirstPage}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="about-text">
						<div>
							<div className="secondary-title">
								{INFO.about.welcome.title}
							</div>
							<p className="secondary-description">
								{INFO.about.welcome.description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-text">
						<div>
							<div className="secondary-title">
								{INFO.about.who.title}
							</div>
							<p className="secondary-description">
								{INFO.about.who.description}
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={secondImg}
								alt=""
							/>
						</div>
						<GenerateButton
							route="about"
							page={secondPage}
							setPage={setSecondPage}
						/>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={thirdImg}
								alt=""
							/>
						</div>
						<GenerateButton
							route="about"
							page={thirdPage}
							setPage={setThirdPage}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="about-text">
						<div>
							<div className="secondary-title">
								{INFO.about.story.title}
							</div>
							<p className="secondary-description">
								{INFO.about.story.description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-text">
						<div>
							<div className="secondary-title">
								{INFO.about.what.title}
							</div>
							<p className="secondary-description">
								{INFO.about.what.description}
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={forthImg}
								alt=""
							/>
						</div>
						<GenerateButton
							route="about"
							page={forthPage}
							setPage={setForthPage}
						/>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={fifthImg}
								alt=""
							/>
						</div>
						<GenerateButton
							route="about"
							page={fifthPage}
							setPage={setFifthPage}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="about-text">
						<div>
							<div className="secondary-title">
								{INFO.about.why.title}
							</div>
							<p className="secondary-description">
								{INFO.about.why.description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-text">
						<div>
							<div className="secondary-title">
								{INFO.about.getInTouch.title}
							</div>
							<p className="secondary-description">
								{INFO.about.getInTouch.description}
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="contact-form">
						<ContactForm
							error={error}
							setError={setError}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
