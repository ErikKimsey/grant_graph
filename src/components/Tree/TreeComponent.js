import React, { Component } from 'react';
import * as d3 from 'd3';
import Tree from './TreeD3';

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
			data: null
		};
		this.containerRef = React.createRef();
	}

	componentDidMount() {
		console.log('mointain');
		this.setState({ data: data });
	}

	render() {
		console.log(this.state.data);

		return (
			<div className="tree" style={styles.container} ref={this.containerRef}>
				<Tree items={this.state.data} />
			</div>
		);
	}
}

export default TreeComponent;
