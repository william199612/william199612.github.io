import React from "react";
import Avatar from "@mui/material/Avatar";
import INFO from "../data/info";

export default function Resume() {
	return (
		<div className="resume-container">
			<div
				className="top-image"
				style={{
					backgroundImage: `url(${require("../static/images/william1.jpg")})`,
				}}
			></div>
			<div className="avatar-container">
				<img
					className="avatar-image"
					src={require("../static/images/william2.jpg")}
				/>
			</div>
			<div className="title-section">
				<div className="resume-title">
					<h1 className="resume-name">
						{INFO.resume.name}
					</h1>
					<h2 className="resume-subtitle">
						{INFO.resume.subtitle}
					</h2>
					<p>{INFO.resume.summary}</p>
				</div>
				<hr className="section-line" />
			</div>
			<div className="content-section"></div>
		</div>
	);
}
