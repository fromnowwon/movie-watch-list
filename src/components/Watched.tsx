import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'
import { Imovie } from './Search';

export const Watched = () => {
	const { watched } = useContext(GlobalContext);

	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">
						관람 완료
					</h1>
				</div>

				{
					watched.length > 0 
					? (
						<div className="movie-grid">
							{
								watched.map((movie: Imovie) => (
									<MovieCard movie={movie} type="watched" key={movie.id} />
								))
							}
						</div>
					)
					: (
						<h2 className="no-movies">No movies in your list, add some!</h2>
					)
				}
			</div>
		</div>
	)
}
