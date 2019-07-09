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
			data: []
		};
		this.containerRef = React.createRef();
	}

	componentDidMount() {
		console.log('mointain');
	}

	render() {
		return (
			<div className="tree-component-container" style={styles.container} ref={this.containerRef}>
				<Tree items={this.state.data} />
			</div>
		);
	}
}

export default TreeComponent;
