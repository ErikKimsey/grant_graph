import React, { Component } from 'react';
import GraphComponent from '../components/GrantComponent/GrantComponent';
import './graph_container.scss';
import statsData from '../data/stats_2018.json';

export default class GraphContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		this.setState({ data: statsData });
	}

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
				{this.state.data && <GraphComponent data={this.state.data} />}
			</div>
		);
	}
}
