import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/resume">Resume</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
