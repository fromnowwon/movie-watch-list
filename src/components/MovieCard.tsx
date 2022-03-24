import React from 'react'
import { Imovie } from './Search';
import { MovieControls } from './MovieControls';

export const MovieCard = ({ movie, type }: { movie: Imovie, type: string }) => {
	return (
		<div className="movie-card">
			<div className="poster">
				<div className="overlay"></div>
					{
						movie.poster_path ? (
							<img
								src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
								alt={`${movie.title} Poster`}
							/>
						) : (
							<div className="filler-poster"></div>
						)
					}
				<MovieControls type={type} movie={movie} />
			</div>

			<div className="info">
				<span className="title">{movie.title}</span>
			</div>
		</div>
	);
}
