import React from "react";
import { Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorPage = () => {
	return (
		<div className="error-page">
			<div className="error-msg">
				<Typography variant="h3">
					<ErrorIcon />
					404 Page Not Found
				</Typography>
				<br />
				<Typography variant="h4">Oooooops...</Typography>
				<Typography variant="h6">
					Something went wrong.
				</Typography>
				<Typography variant="h6">
					Please choose another page on the top navbar!
				</Typography>
			</div>
		</div>
	);
};

export default ErrorPage;
