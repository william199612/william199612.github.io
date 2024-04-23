import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import AllRepoList from "./AllRepoList";
import LanguageChart from "./LanguageChart";
import { fetchGitHubData } from "../services/githubAPI";

const shortenCommitSHA = (commitId) => {
	return commitId.substring(0, 7);
};

const CommitTimeline = ({ commits }) => {
	return (
		<Timeline>
			{commits.map((commit) => {
				return (
					<TimelineItem key={commit.sha}>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<Grid align="left">
							<Link to={commit.html_url} target="_blank">
								{shortenCommitSHA(commit.sha)}
							</Link>
							<ListItemText
								secondary={commit.commit.author.date}
							/>
							<ListItemText
								primary={commit.commit.message
									.split("\n")
									.map((line, index) => (
										<p key={index}>{line}</p>
									))}
							/>
						</Grid>
					</TimelineItem>
				);
			})}
		</Timeline>
	);
};

export default function RepoInfo({
	selectedRepoName,
	repoData,
}) {
	const [copied, setCopied] = useState(false);
	const [selectedRepoData, setSelectedRepoData] = useState(
		[]
	);
	const [selectedRepoLanguage, setSelectedRepoLanguage] =
		useState([]);
	const [commitData, setCommitData] = useState([]);

	let repoURL = `https://github.com/william199612/${selectedRepoName}`;
	let repoApiURL = `https://api.github.com/repos/william199612/${selectedRepoName}`;
	let repoCloneURL = `${repoURL}.git`;
	let repoLanguagesURL = `${repoApiURL}/languages`;
	let repoCommitURL = `${repoApiURL}/commits`;
	let gitCloneCmd =
		selectedRepoName === "All" || selectedRepoName === null
			? null
			: `git clone ${repoCloneURL}`;

	const handleCopy = () => {
		navigator.clipboard.writeText(gitCloneCmd);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	useEffect(() => {
		if (selectedRepoName !== "All") {
			fetchGitHubData(repoApiURL)
				.then((data) => {
					// console.log(data);
					setSelectedRepoData(data);
				})
				.catch((err) => {
					console.error(
						`Error fetching GitHub commits data: `,
						err
					);
				});

			fetchGitHubData(repoLanguagesURL)
				.then((data) => {
					// console.log(data);
					setSelectedRepoLanguage(data);
				})
				.catch((err) => {
					console.error(
						`Error fetching GitHub commits data: `,
						err
					);
				});

			fetchGitHubData(repoCommitURL)
				.then((data) => {
					// console.log(data);
					setCommitData(data);
				})
				.catch((err) => {
					console.error(
						`Error fetching GitHub commits data: `,
						err
					);
				});
		}
	}, [selectedRepoName]);

	return (
		<>
			{selectedRepoName === "All" ? (
				<AllRepoList repoData={repoData} />
			) : selectedRepoName === null ? null : (
				<div className="repo-section">
					<div className="repo-description">
						<div className="repo-title">
							<Link
								className="repo-link"
								to={repoURL}
								target="_blank"
							>
								<Typography>
									{selectedRepoName}
									<KeyboardArrowRightIcon />
								</Typography>
							</Link>
						</div>
						<div className="clone-container">
							<div className="clone-btn">
								<Button
									variant="outlined"
									onClick={handleCopy}
								>
									<Typography>Git Clone</Typography>
									<ContentCopyIcon />
								</Button>
								{copied && (
									<small className="copy-msg">
										Copied to clipboard!
									</small>
								)}
							</div>
						</div>
						<div className="description">
							<Typography variant="body1" align="left">
								Created at: {selectedRepoData.created_at}
							</Typography>

							<Typography variant="body1" align="left">
								Last Update: {selectedRepoData.updated_at}
							</Typography>
							<Typography variant="h6" align="left">
								Description:
							</Typography>
							<Typography variant="body1" align="left">
								{selectedRepoData.description}
							</Typography>
							<Typography variant="h6" align="left">
								Main Programming Language:
							</Typography>
							<Typography variant="body1" align="left">
								{selectedRepoData.language}
							</Typography>
							<LanguageChart
								selectedRepoLanguage={selectedRepoLanguage}
							/>
						</div>
					</div>

					<div className="commit-container">
						<Typography>Commits History</Typography>
						<div className="commit-section">
							<CommitTimeline commits={commitData} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
