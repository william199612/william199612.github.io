import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ErrorPage from "./pages/Error";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
			</div>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
