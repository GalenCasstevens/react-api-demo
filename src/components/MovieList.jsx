import { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
	const [data, setData] = useState(null);

	/* with Fetch API */
	// useEffect(() => {
	// 	const url =
	// 		'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
	// 	const options = {
	// 		method: 'GET',
	// 		headers: {
	// 			'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
	// 			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
	// 		},
	// 	};
	// 	fetch(url, options)
	// 		.then((response) => response.json())
	// 		.then((json) => setData(json))
	// 		.catch((error) => console.error(error));
	// }, []);

	/* with Axios */
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
		axios
			.get(url, options)
			.then((res) => setData(res.data))
			.catch((error) => console.error(error));
	});

	return <h1>Movie List</h1>;
}

export default MovieList;
