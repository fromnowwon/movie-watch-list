import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Imovie } from './Search';
import { MovieCard } from './MovieCard';

export const Watchlist = () => {
	const { watchlist } = useContext(GlobalContext);

	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					<h1 className="heading">와치리스트</h1>

					<span className="count-pill">
						{ watchlist.length }
						{ watchlist.length <= 1 ? ' Movie' : ' Movies' }
					</span>
				</div>

				{
					watchlist.length > 0 
					? (
						<div className="movie-grid">
							{
								watchlist.map((movie: Imovie) => (
									<MovieCard movie={movie} type="watchlist" key={movie.id} />
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
