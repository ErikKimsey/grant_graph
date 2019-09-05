import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TreeComponent from './components/Tree/TreeComponent';
import GraphContainer from './containers/GraphContainer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<GraphContainer />
			</header>
		</div>
	);
}

export default App;
