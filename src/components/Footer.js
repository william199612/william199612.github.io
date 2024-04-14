import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer">
			<footer className="container py-3 my-4">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<Link
							className="nav-link px-2 text-body-secondary"
							to="/"
						>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link px-2 text-body-secondary"
							to="/about"
						>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link px-2 text-body-secondary"
							to="/portfolio"
						>
							Portfolio
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link px-2 text-body-secondary"
							to="/resume"
						>
							Resume
						</Link>
					</li>
				</ul>
				<p class="text-center text-body-secondary">
					© 2024 QUT IFN666 Web Development - Assignment 2
				</p>
			</footer>
		</div>
	);
}
