import React from "react";

import INFO from "../data/info";

export default function About() {
	return (
		<div className="page-container">
			<div className="title-section">
				<h1 className="content-title text-center title">
					{INFO.about.title}
				</h1>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="left-section">
						<div className="round-img-container">
							<img
								className="round-image"
								src="https://images.unsplash.com/photo-1595947006841-0984683d036e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="right-section">
						<div className="secondary-title">Hi!</div>
						<p className="secondary-description">
							{INFO.about.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
