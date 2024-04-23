import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";

export default function GenerateButton({
	route,
	page,
	setPage,
}) {
	const handleGenerate = () => {
		setPage(Math.floor(Math.random() * 50));
	};

	return (
		<div className="generate-btn">
			{route === "home" ? (
				<Button
					variant="contained"
					onClick={handleGenerate}
				>
					<Typography>Change background</Typography>
					<LoopIcon />
				</Button>
			) : route === "about" ? (
				<Button
					variant="contained"
					onClick={handleGenerate}
				>
					<LoopIcon />
				</Button>
			) : null}
		</div>
	);
}
