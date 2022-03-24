import React, { useContext } from 'react'
import { Imovie } from './Search';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({ movie, type }: { movie: Imovie, type: string }) => {
	const { 
		removeMovieFromWatchlist, 
		addMovieToWatched,
		moveToWatchlist,
		removeFromWatchlisted,
	} = useContext(GlobalContext);
	
	return (
		<div className="inner-card-controls">
			{
				type === 'watchlist' && 
				(
					<>
						<button className="ctrl-btn"
							onClick={() => addMovieToWatched(movie)}
						>
							<i className="fa-fw far fa-eye"></i>
						</button>

						<button className="ctrl-btn"
							onClick={() => removeMovieFromWatchlist(movie.id)}
						>
							<i className="fa-fw far fa-times-circle"></i>
						</button>
					</>
				)
			}

			{
				type === "watched" &&
				(
					<>
						<button className="ctrl-btn"
							onClick={() => moveToWatchlist(movie)}
						>
							<i className="fa-fw far fa-eye-slash"></i>
						</button>

						<button className="ctrl-btn"
							onClick={() => removeFromWatchlisted(movie.id)}
						>
							<i className="fa-fw far fa-times-circle"></i>
						</button>
					</>
				)
			}
		</div>
	)
}
