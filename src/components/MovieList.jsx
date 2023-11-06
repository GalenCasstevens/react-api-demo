import { useState, useEffect } from 'react';

function MovieList() {
	const [data, setData] = useState(null);

	/* with Fetch API */
	useEffect(() => {
		const url =
			'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
			},
		};
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error));
	}, []);

	return <h1>Movie List</h1>;
}

export default MovieList;
