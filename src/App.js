import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TreeComponent from './components/Tree/TreeComponent';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TreeComponent />
			</header>
		</div>
	);
}

export default App;
