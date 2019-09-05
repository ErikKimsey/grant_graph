import React, { Component } from 'react';
import GraphComponent from '../components/GrantComponent/GrantComponent';
import './graph_container.scss';

export default class GraphContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="graph-container">
				<form>
					<label>
						Name:
						<input type="text" name="name" />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<GraphComponent />
			</div>
		);
	}
}
