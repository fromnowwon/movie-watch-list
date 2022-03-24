import React from 'react'
import { useState } from 'react';
import { ResultCard } from './ResultCard';

export interface Imovie {
	id: number
	title: string
	poster_path: string
	release_date: string
	original_title: string
}

export const Search = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setQuery(e.target.value);

		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko-KR&page=1&include_adult=false&query=${e.target.value}`)
		.then(res => res.json())
		.then(data => {
			if(!data.errors) {
				setResults(data.results);
				console.log(data)
			} else {
				setResults([]);
			}
		})
	}

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input 
							type="text" 
							placeholder='영화 제목을 입력하세요.'
							value={ query }
							onChange={ onChange }
						/>
					</div>
					{
						results.length > 0 &&
						<ul className="results">
							{
								results.map((movie: Imovie) => (
									<li key={movie.id}>
										<ResultCard movie={ movie }/>
									</li>
								))
							}
						</ul>
					}
				</div>
			</div>
		</div>
	)
}
