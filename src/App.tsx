import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { Main } from './components/Main';
import './App.css';
import './lib/font-awesome/css/all.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
		<BrowserRouter>
			<GlobalProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/watchlist" element={<Watchlist />}/>
					<Route path="/watched" element={<Watched />}/>
					<Route path="/add" element={<Add />}/>
				</Routes>
			</GlobalProvider>
		</BrowserRouter>
  );
}

export default App;
