import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		</Router>
	);
}

export default App;
