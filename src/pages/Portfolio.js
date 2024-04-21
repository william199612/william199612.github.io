import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreateIcon from "@mui/icons-material/Create";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

import Searchbar from "../components/Searchbar";
import RepoInfo from "../components/RepoInfo";
import { fetchGitHubData } from "../services/githubAPI";
import "../styles/style.css";

const userProfileURL =
	"https://api.github.com/users/william199612";

export default function Portfolio() {
	const [userData, setUserData] = useState([]);
	const [repoData, setRepoData] = useState([]);
	const [selectedRepoName, setSelectedRepoName] =
		useState("All");

	useEffect(() => {
		// fetch for github user profile
		fetchGitHubData(userProfileURL)
			.then((data) => setUserData(data))
			.catch((err) =>
				console.error(
					"Error fetching GitHub user data: ",
					err
				)
			);
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
								<i className="fa-solid fa-link"></i>
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
						<div className="searchbar">
							<Searchbar
								selectedRepoName={selectedRepoName}
								setSelectedRepoName={setSelectedRepoName}
							/>
						</div>
					</div>
					<div className="right-section">
						{selectedRepoName == "All" ? null : (
							<RepoInfo
								selectedRepoName={selectedRepoName}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
