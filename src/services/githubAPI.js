export const fetchGitHubData = async (url) => {
	const token = process.env.REACT_APP_GITHUB_API_KEY;
	let response = await fetch(url, {
		headers: {
			Accept: "application/vnd.github+json",
			Authorization: `Bearer ${token}`,
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});
	if (!response.ok) {
		throw new Error("Fail to fetch from GitHub...");
	}
	let data = await response.json();
	// console.log(data);
	return data;
};
