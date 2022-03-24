import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="inner-content">
					<div className="brand">
						<Link to="/">
							<FontAwesomeIcon icon={ faFilm } />
						</Link>
					</div>

					<ul className="nav-links">
						<li>
							<Link to="/watchlist">와치리스트</Link>
						</li>
						<li>
							<Link to="/watched">관람 완료</Link>
						</li>
						<li>
							<Link to="/add" className="btn">+ Add</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
