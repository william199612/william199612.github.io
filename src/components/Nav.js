import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-center"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									className="nav-link navlink-custom"
									activeClassName="active"
									exact
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className="nav-link navlink-custom"
									activeClassName="active"
									to="/about"
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									className="nav-link navlink-custom"
									activeClassName="active"
									to="/resume"
								>
									Resume
								</NavLink>
							</li>
							<li>
								<NavLink
									className="nav-link navlink-custom"
									activeClassName="active"
									to="/portfolio"
								>
									Portfolio
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
