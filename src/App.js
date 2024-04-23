import React, { useState } from "react";
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
import NotFoundPage from "./pages/Notfound";
import Error from "./pages/Notfound";

function App() {
	const [error, setError] = useState(null);

	return (
		<Router>
			<div className="App">
				<Nav />
			</div>
			{error === null ? (
				<Routes>
					<Route
						index
						path="/"
						element={<Home setError={setError} />}
					/>
					<Route
						path="/about"
						element={
							<About error={error} setError={setError} />
						}
					/>
					<Route path="/resume" element={<Resume />} />
					<Route
						path="/portfolio"
						element={
							<Portfolio
								error={error}
								setError={setError}
							/>
						}
					/>
					<Route
						path="*"
						element={<NotFoundPage />}
					></Route>
				</Routes>
			) : (
				<Error />
			)}

			<Footer />
		</Router>
	);
}

export default App;
