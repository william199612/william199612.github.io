import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import Typography from "@mui/material/Typography";

import INFO from "../data/info";

const JourneyTimeline = () => {
	const CareerDescription = ({ descriptions }) => {
		return (
			<ul style={{ padding: "8px 0px 0px 16px" }}>
				{descriptions.map((description, index) => (
					<li key={index}>{description}</li>
				))}
			</ul>
		);
	};
	return (
		<Timeline position="alternate">
			<>
				{INFO.resume.career.map((job, index) => {
					return (
						<TimelineItem>
							<TimelineOppositeContent
								className="career-time"
								sx={{ m: "auto 0" }}
								align="right"
								variant="h5"
							>
								{job.date}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot color="primary">
									{job.type === "IT" ? (
										<LaptopChromebookIcon />
									) : job.type === "social" ? (
										<GroupsIcon />
									) : (
										<WorkIcon />
									)}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent sx={{ py: "12px", px: 2 }}>
								<div className="career-info">
									<Typography align="left" variant="h6">
										{job.title}
									</Typography>
									<Typography
										align="left"
										variant="subtitle2"
									>
										<a href={job.companyLink}>
											{job.company}
										</a>
										{` - ${job.location}`}
									</Typography>
									<Typography
										align="left"
										sx={{
											fontSize: "12px",
											color: "grey",
										}}
									>
										{job.companyInfo}
									</Typography>
									<Typography align="left">
										<CareerDescription
											descriptions={job.description}
										/>
									</Typography>
								</div>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</>
		</Timeline>
	);
};

export default function Resume() {
	return (
		<div className="resume-container">
			<div
				className="top-image"
				style={{
					backgroundImage: `url(${require("../static/images/top-image.jpg")})`,
				}}
			></div>
			<div className="avatar-container">
				<img
					className="avatar-image"
					alt="william hung"
					src={require("../static/images/william2.jpg")}
				/>
			</div>
			<div className="title-section">
				<div className="resume-title">
					<h1 className="resume-name">
						{INFO.resume.name}
					</h1>
					<h2 className="resume-subtitle">
						{INFO.resume.subtitle}
					</h2>
					<p>{INFO.resume.summary}</p>
				</div>
				<hr className="section-line" />
			</div>
			<div className="content-section">
				<div className="my-journey">
					<h2 className="resume-subtitle">My Journey</h2>
					<div className="timeline">
						<JourneyTimeline />
					</div>
				</div>
			</div>
		</div>
	);
}
