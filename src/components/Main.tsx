import React from 'react'
import { Search } from './Search';

export const Main = () => {
	return (
		<div className="main-page">
			<h1>Movie Watch List</h1>
			<p>리스트에 추가할 영화를 검색해보세요.</p>
			<Search />
		</div>
	)
}
