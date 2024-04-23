import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { fetchGitHubData } from "../services/githubAPI";

const userRepoURL =
	"https://api.github.com/users/william199612/repos";

export default function Searchbar({
	selectedRepoName,
	setSelectedRepoName,
	repoData,
	setRepoData,
	setError,
}) {
	const [inputValue, setInputValue] = useState("");
	const [value, setValue] = useState("All");
	const [options, setOptions] = useState([]);

	useEffect(() => {
		fetchGitHubData(userRepoURL)
			.then((data) => {
				// console.log(data);
				setRepoData(data);
				let repoNameList = data.map((d) => d.name);
				const repoList = ["All", ...repoNameList];
				setOptions(repoList);
			})
			.catch((err) => {
				console.error(
					`Error fetching GitHub repo data: `,
					err
				);
				setError(err);
			});
		setSelectedRepoName(value);
	}, []);

	return (
		<Autocomplete
			value={selectedRepoName}
			inputValue={inputValue}
			onChange={(event, newValue) => {
				setSelectedRepoName(newValue);
			}}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			id="controllable-states-demo"
			options={options}
			getOptionLabel={(option) => option || ""}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Search or Select a Repository"
				/>
			)}
		/>
	);
}
