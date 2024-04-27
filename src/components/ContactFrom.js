import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const EmailSuccessMessage = () => {
	return (
		<div className="success-message">
			<Typography>
				<DoneAllIcon /> Message Sent!
			</Typography>
		</div>
	);
};

export default function ContactForm({ error, setError }) {
	const [sent, setSent] = useState(false);
	const form = useRef();

	const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
	const templateId =
		process.env.REACT_APP_EMAIL_TEMPLATE_ID;
	const publicKey = process.env.REACT_APP_EMAIL_KEY;

	const handleEmailSent = () => {
		setTimeout(() => {
			setSent(true);
		}, 500);

		setTimeout(() => {
			setSent(false);
		}, 3000);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(serviceId, templateId, form.current, {
				publicKey: publicKey,
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
				},
				(err) => {
					console.log("FAILED...", err.text);
					setError(err);
				}
			);
	};

	return (
		<div className="card card-container">
			<form
				className="card-body card-body-custom"
				ref={form}
				onSubmit={sendEmail}
			>
				<p className="card-title">Contact Me !</p>
				<input
					type="text"
					className="input-layout"
					name="user_name"
					id="name"
					placeholder="Name"
				/>
				<input
					type="email"
					className="input-layout"
					name="user_email"
					id="email"
					placeholder="Email"
				/>
				<textarea
					className="textarea-layout"
					placeholder="What you want to say to me..."
					name="message"
					id="message"
					rows="3"
				></textarea>
				<button
					type="submit"
					className="btn btn-primary submit-buttom"
					value="Send"
					onClick={handleEmailSent}
				>
					Submit
				</button>
				{sent && error === null && <EmailSuccessMessage />}
			</form>
		</div>
	);
}
