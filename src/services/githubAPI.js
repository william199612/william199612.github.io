export const fetchGitHubData = async (url) => {
	let response = await fetch(url);
	if (!response.ok) {
		throw new Error("Fail to fetch image");
	}
	let data = await response.json();
	// console.log(data);
	return data;
};
