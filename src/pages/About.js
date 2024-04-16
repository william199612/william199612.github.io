import React from "react";

import ContactForm from "../components/ContactFrom";
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
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={INFO.about.welcome.image}
								alt=""
							/>
						</div>
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
								src={INFO.about.who.image}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={INFO.about.story.image}
								alt=""
							/>
						</div>
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
								src={INFO.about.what.image}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="content-section row">
				<div className="col-md-6">
					<div className="about-img">
						<div className="round-img-container">
							<img
								className="round-image"
								src={INFO.about.why.image}
								alt=""
							/>
						</div>
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
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
