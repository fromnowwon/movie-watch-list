import React, { useContext } from 'react';
import { Imovie } from './Search';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ movie } : {movie: Imovie}) => {
	const { 
		addMovieToWatchlist, 
		addMovieToWatched,
		watchlist,
		watched
	} = useContext(GlobalContext);
	
	// 이미 볼 영화, 본 영화 리스트에 있는지 확인 후 있다면 버튼 비활성화
	let storedMovie = watchlist.find((obj: Imovie) => obj.id === movie.id);
	let storeMovieWatched = watched.find((obj: Imovie) => obj.id === movie.id);
	const watchlistDisabled = storedMovie 
		? true 
		: storeMovieWatched 
			? true 
			: false;
	const watchedDisabled = storeMovieWatched ? true : false;

	return (
		<div className="result-card">
			<div className="poster-wrapper">
				{
					movie.poster_path
					? (
						<img 
							src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
							alt={`${movie.title} Poster`} 
						/>
					)
					: (
						<div className="filler-poster"></div>
					)
				}
			</div>
			<div className="info">
				<div className="header">
					<h3 className="title">{ movie.title }</h3>
					<h3 className="original-title">{ movie.original_title }</h3>
					<h4 className="release-date">
						{ 
							movie.release_date
							? movie.release_date.substring(0, 4)
							: "-"
						}
					</h4>
				</div>

				<div className="controls">
					<button className="btn" 
						onClick={() => addMovieToWatchlist(movie) }
						disabled={watchlistDisabled}
					>
						Add to WatchList
					</button>
					<button className="btn" 
						onClick={() => addMovieToWatched(movie) }
						disabled={watchedDisabled}
					>
						Add to Watched
					</button>
				</div>
			</div>
		</div>
	)
}
