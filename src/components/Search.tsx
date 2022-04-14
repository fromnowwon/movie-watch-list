import React, { useMemo } from 'react'
import { useState } from 'react';
import { ResultCard } from './ResultCard';
import { debounce } from 'lodash'

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

	// debounce 최적화
	const debouncedSearch = useMemo(() => debounce((query) => {
		setQuery(query);
		console.log(query)

		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko-KR&page=1&include_adult=false&query=${query}`)
		.then(res => res.json())
		.then(data => {
			if(!data.errors) {
				setResults(data.results);
			} else {
				setResults([]);
			}
		})
	}, 200), [ query ]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		debouncedSearch(e.target.value);
	}

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input 
							type="text" 
							placeholder='영화 제목을 입력하세요.'
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
