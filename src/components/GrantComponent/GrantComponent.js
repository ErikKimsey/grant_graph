import React, { Component } from 'react';
import draw from '../../graphs/GrantGraph';

class GraphComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
		this.containerRef = React.createRef();
		console.log(this.props);
	}

	componentDidMount() {
		let container = document.querySelector('.grant-component-container');
		draw(this.props.data, container);
	}

	render() {
		return <div className="grant-component-container" ref={this.containerRef} />;
	}
}

export default GraphComponent;
