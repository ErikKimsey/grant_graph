import React, { Component } from 'react';
import * as d3 from 'd3';
import Tree from './TreeD3';
import draw from './TreeD3';

const data = {
	name: 'Eric D',
	children: [
		{
			name: 'Erik L',
			children: [
				{
					name: 'Amon',
					children: [ { name: 'Rabert' } ]
				}
			]
		},
		{
			name: 'Isaac J',
			children: [ { name: 'Scrooby' } ]
		}
	]
};

const styles = {
	container: {
		width: '833px',
		height: '500px',
		border: '5px solid pink'
	}
};

class TreeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		};
		this.containerRef = React.createRef();
	}

	componentDidMount() {
		let container = document.querySelector('.tree-component-container');
		draw(this.state.data, container);
	}

	render() {
		return <div className="tree-component-container" style={styles.container} ref={this.containerRef} />;
	}
}

export default TreeComponent;
