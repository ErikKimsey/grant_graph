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
					children: [
						{ name: 'Rabert' },
						{
							name: 'Big Bear',
							children: [ { name: 'Lil Bear' }, { name: 'Gnarly Bear' }, { name: 'Snuffles' } ]
						},
						{ name: 'Ice Bear' },
						{ name: 'Raccoon' }
					]
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
		width: '90vw',
		height: '90vh'
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
