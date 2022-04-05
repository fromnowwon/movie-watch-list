import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { Imovie } from '../components/Search';

// initial state
const initialState = {
	watchlist: localStorage.getItem('watchlist') 
		? JSON.parse(localStorage.getItem('watchlist') as string) 
		: [],
	watched: localStorage.getItem('watched') 
		? JSON.parse(localStorage.getItem('watched') as string) 
		: [],
	addMovieToWatchlist: (movie: Imovie) => {},
	removeMovieFromWatchlist: (id: number) => {},
	addMovieToWatched: (movie: Imovie) => {},
	moveToWatchlist: (movie: Imovie) => {},
	removeFromWatchlisted: (id: number) => {},
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props: any) => {
	// useReducer를 사용하여 상태 업데이트 로직 분리하기
	// state: 컴포넌트에서 사용할 수 있는 상태,
	// dispatch: 액션을 발생시키는 함수,
	// AppReducer: Reducer 함수
	// initialState: 초기 상태 값
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// 저장한 리스트가 남아있도록 localStorage에 저장
	useEffect(() => {
		localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
		localStorage.setItem('watched', JSON.stringify(state.watched));
	}, [state])

	// actions
	const addMovieToWatchlist = (movie: Imovie) => {
		dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
	}
	const removeMovieFromWatchlist = (id: number) => {
		dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id })
	}
	const addMovieToWatched = (movie: Imovie) => {
		dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
	}
	// Move back to watchlist
	const moveToWatchlist = (movie: Imovie) => {
		dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie })
	}
	// Remove from watchlist
	const removeFromWatchlisted = (id: number) => {
		dispatch({ type: "REMOVE_FROM_WATCHED", payload: id })
	}

	const value = React.useMemo(() => ({ 
		watchlist: state.watchlist,
		watched: state.watched,
		addMovieToWatchlist,
		removeMovieFromWatchlist,
		addMovieToWatched,
		moveToWatchlist,
		removeFromWatchlisted,
	}), [state]);

	return (
		<GlobalContext.Provider value={value}>
			{props.children}
		</GlobalContext.Provider>
	)
}