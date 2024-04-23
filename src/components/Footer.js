import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CheckIcon from "@mui/icons-material/Check";

import INFO from "../data/info";

export default function Footer() {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(INFO.socials.email);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};
	return (
		<div className="footer">
			<footer className="container py-3">
				<div className="socials-wrapper">
					<Stack direction="row" spacing={4}>
						<Avatar variant="rounded">
							<Link
								to={INFO.socials.github}
								target="_blank"
							>
								<GitHubIcon />
							</Link>
						</Avatar>
						<Avatar variant="rounded">
							<Link
								to={INFO.socials.linkedin}
								target="_blank"
							>
								<LinkedInIcon />
							</Link>
						</Avatar>
						<Avatar variant="rounded">
							<Link
								to={INFO.socials.facebook}
								target="_blank"
							>
								<FacebookIcon />
							</Link>
						</Avatar>
						<Avatar variant="rounded">
							<Link
								to={INFO.socials.instagram}
								target="_blank"
							>
								<InstagramIcon />
							</Link>
						</Avatar>
						<Avatar variant="rounded">
							<Link onClick={handleCopy}>
								<EmailIcon />
							</Link>
						</Avatar>
					</Stack>
				</div>
				<hr />
				<p className="copyright-text">
					William Hung © 2024 QUT IFN666
				</p>
				{copied && (
					<small className="copy-msg">
						<CheckIcon />
						Copied to clipboard!
					</small>
				)}
			</footer>
		</div>
	);
}
