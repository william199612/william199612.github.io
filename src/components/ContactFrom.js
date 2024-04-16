import React from "react";

export default function ContactForm() {
	return (
		<div className="card card-container">
			<div className="card-body card-body-custom">
				<p className="card-title">Contact Me !</p>
				<input
					type="text"
					className="input-layout"
					id="name"
					placeholder="Name"
				/>
				<input
					type="email"
					className="input-layout"
					id="email"
					placeholder="Email"
				/>
				<textarea
					className="textarea-layout"
					placeholder="What you want to say to me..."
					id="message"
					rows="3"
				></textarea>
				<button
					type="submit"
					className="btn btn-primary submit-buttom"
				>
					Submit
				</button>
			</div>
		</div>
	);
}
