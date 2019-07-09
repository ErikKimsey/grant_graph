import React, { Component } from 'react';
import * as d3 from 'd3';
import Tree from './TreeD3';

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
		console.log(Tree);

		console.log('mountain');
	}

	render() {
		return (
			<React.Fragment style={styles.container} className="tree-component-container" ref={this.containerRef}>
				Tree Component
			</React.Fragment>
		);
	}
}

export default TreeComponent;
