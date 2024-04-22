import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

export default function LanguageChart({
	selectedRepoLanguage,
}) {
	const size = {
		width: 400,
		height: 200,
	};

	const StyledText = styled("text")(({ theme }) => ({
		fill: theme.palette.text.primary,
		textAnchor: "middle",
		dominantBaseline: "central",
		fontSize: 20,
	}));

	function PieCenterLabel({ children }) {
		const { width, height, left, top } = useDrawingArea();
		return (
			<StyledText x={left + width / 2} y={top + height / 2}>
				{children}
			</StyledText>
		);
	}
	const data = Object.entries(selectedRepoLanguage).map(
		([label, value]) => ({ label, value })
	);

	return (
		<PieChart
			series={[
				{
					data,
					innerRadius: 80,
				},
			]}
			{...size}
		>
			<PieCenterLabel>Language Portion</PieCenterLabel>
		</PieChart>
	);
}
