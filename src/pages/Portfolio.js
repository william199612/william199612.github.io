import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreateIcon from "@mui/icons-material/Create";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

import Searchbar from "../components/Searchbar";
import "../styles/style.css";

const baseURL = "https://api.github.com/";
const userRepoName = "users/william199612";

export default function Portfolio() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		// fetch for github user profile
		(async () => {
			let response = await fetch(baseURL + userRepoName);
			if (!response.ok) {
				throw new Error("Fail to fetch image");
			}
			let data = await response.json();
			console.log(data);
			setUserData(data);
		})();
	}, []);

	return (
		<div className="portfolio-container">
			<div className="content-section">
				<h2 className="resume-subtitle">My Projects</h2>
				<div className="profile-section">
					<div className="gh-image round-img-container">
						<img
							className="round-image"
							src={userData.avatar_url}
							alt={userData.name}
						/>
					</div>
					<div className="profile-content">
						<div className="gh-status">
							<div className="profile-subtitle first-text">
								<div className="status-num">
									{userData.followers}
								</div>
								Followers
							</div>
							<div className="profile-subtitle">
								<div className="status-num">
									{userData.following}
								</div>
								Following
							</div>
							<div className="profile-subtitle">
								<div className="status-num">
									{userData.public_repos}
								</div>
								Public Repos
							</div>
						</div>

						<div className="gh-info">
							<div className="info">
								<CreateIcon />
								<h5 className="info-text">
									Since: {userData.created_at}
								</h5>
							</div>
							<div className="info">
								<LocationOnIcon />
								<h5 className="info-text">
									{userData.location}
								</h5>
							</div>
							<div className="info">
								<EmailIcon />
								<h5 className="info-text">
									{userData.email}
								</h5>
							</div>
						</div>

						<Link
							to={userData.html_url}
							preventScrollReset={true}
							style={{
								textDecoration: "none",
							}}
						>
							<span className="profile-name">
								github.com/{userData.login}{" "}
								<i class="fa-solid fa-link"></i>
							</span>
						</Link>
					</div>
					<div className="subscribe-section">
						<Button
							className="sub-btn"
							variant="contained"
							endIcon={<NotificationsIcon />}
						>
							Subscribe
						</Button>
					</div>
				</div>
				<div className="project-section">
					<div className="left-section">
						<p>Searchbar and project list</p>
						<div className="searchbar">
							<Searchbar />
						</div>
					</div>
					<div className="right-section">
						<p>Show branch and chart</p>
					</div>
				</div>
			</div>
		</div>
	);
}
