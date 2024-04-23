import React from "react";
import Grid from "@mui/material/Grid";
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
import Stack from "@mui/material/Stack";

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
						<TimelineItem key={index}>
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
									<Grid align="left">
										<CareerDescription
											descriptions={job.description}
										/>
									</Grid>
								</div>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</>
		</Timeline>
	);
};

const SkillSets = ({ skills }) => {
	return (
		<Stack
			direction="row"
			spacing={10}
			sx={{
				margin: "auto",
				width: "900px",
			}}
			justifyContent="center"
		>
			{skills.map((skill, index) => {
				return (
					<div key={index}>
						<div className="icon-container">
							<img
								className="icon-image"
								alt={skill}
								src={require(
									"../static/icons/" + skill + ".png"
								)}
							/>
						</div>
						<div style={{ marginLeft: "30px" }}>
							<Typography
								align="center"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "20px",
									color: "grey",
									height: "100%",
								}}
							>
								{skill}
							</Typography>
						</div>
					</div>
				);
			})}
		</Stack>
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
			</div>
			<hr className="section-line" />
			<div className="content-section">
				<h2 className="resume-subtitle">My Journey</h2>
				<div className="detail-content">
					<JourneyTimeline />
				</div>
			</div>
			<div className="content-section">
				<h2 className="resume-subtitle">Skills</h2>
				<div className="detail-content">
					{Object.values(INFO.resume.skills).map(
						(skill, index) => {
							return (
								<div className="skillset" key={index}>
									<Typography
										align="center"
										sx={{
											paddingBottom: "30px",
											fontSize: "24px",
											color: "rgba(0,200,200)",
										}}
									>
										{skill.name}
									</Typography>
									<SkillSets skills={skill.description} />
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="content-section">
				<h2 className="resume-subtitle">Qualifications</h2>
				<div className="detail-content">
					<div className="certificate-content">
						<div className="image-container">
							<img
								className="certificate-image"
								alt="AWS Connect Certificate"
								src={require("../static/images/aws-connect-certificate.png")}
							/>
						</div>
						<div className="image-container">
							<img
								className="certificate-image"
								alt="AWS Connect Certificate"
								src={require("../static/images/udemy-2024-full-stack-web-development.png")}
							/>
						</div>
						<div className="image-container">
							<img
								className="certificate-image"
								alt="AWS Connect Certificate"
								src={require("../static/images/udemy-2022-python-full-course.png")}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
