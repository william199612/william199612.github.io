export const fetchUnsplashImage = async (search, page) => {
	const unsplashApiKey =
		process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
	const url = `https://api.unsplash.com/search/photos?query=${search}&page=${page}&per_page=1`;

	let response = await fetch(url, {
		headers: {
			Authorization: `Client-ID ${unsplashApiKey}`,
		},
	});
	if (!response.ok) {
		throw new Error("Fail to fetch image");
	}
	let data = await response.json();
	data = data.results[0]; // only get one result from each search result
	return data;
};
