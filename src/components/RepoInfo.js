import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { fetchGitHubData } from "../services/githubAPI";
import { Typography } from "@mui/material";

const shortenCommitSHA = (commitId) => {
	return commitId.substring(0, 7);
};

const CommitTimeline = ({ commits }) => {
	return (
		<Timeline>
			{commits.map((commit, index) => {
				return (
					<TimelineItem key={index}>
						<Link to={commit.html_url} target="_blank">
							<TimelineOppositeContent color="textSecondary">
								<Typography>
									{shortenCommitSHA(commit.sha)}
									<br />
									{commit.commit.author.date}
								</Typography>
							</TimelineOppositeContent>
						</Link>

						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							{commit.commit.message}
						</TimelineContent>
					</TimelineItem>
				);
			})}
		</Timeline>
	);
};

export default function RepoInfo({ selectedRepoName }) {
	const [copied, setCopied] = useState(false);
	const [commitData, setCommitData] = useState([]);

	let repoURL = `https://github.com/william199612/${selectedRepoName}`;
	let repoApiURL = `https://api.github.com/repos/william199612/${selectedRepoName}`;
	let repoCloneURL = `${repoApiURL}/${selectedRepoName}.git`;
	let repoCommitURL = `${repoApiURL}/commits`;
	let gitCloneCmd =
		selectedRepoName == "All" || selectedRepoName == null
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
		fetchGitHubData(repoCommitURL)
			.then((data) => {
				console.log(data);
				setCommitData(data);
			})
			.catch((err) => {
				console.error(
					`Error fetching GitHub commits data: `,
					err
				);
			});
	}, []);

	return (
		<>
			{selectedRepoName == "All" ||
			selectedRepoName == null ? null : (
				<div className="repo-section">
					<div className="repo-title">
						<Typography>
							{selectedRepoName}
							<Link to={repoURL} target="_blank">
								<KeyboardArrowRightIcon />
							</Link>
						</Typography>
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

					<div className="commit-section">
						<CommitTimeline commits={commitData} />
					</div>
				</div>
			)}
		</>
	);
}
