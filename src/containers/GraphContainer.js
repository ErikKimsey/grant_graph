import React, { Component } from 'react';
import GraphComponent from '../components/GrantComponent/GrantComponent';
import GrantGroup from '../utilities/grantTypeSearch';
import './graph_container.scss';
import statsData from '../data/stats_2018.json';
// import grantTypeSearch from '../utilities/grantTypeSearch';
import result from '../data/converted';

export default class GraphContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			searchInput: '',
			searchedGrants: [],
			grantGroup: null
		};
	}

	componentDidMount() {
		this.setState({ data: statsData });
		this.createGrantGroup(statsData, null);
	}

	handleInput = (e) => {
		let input = e.currentTarget.value;
		this.setState({
			searchInput: input
		});
	};

	createGrantGroup = (data, input = null) => {
		this.setState({ grantGroup: new GrantGroup(data, input) });
	};

	handleSearch = () => {};

	handleSubmit = (e) => {
		e.preventDefault();
		this.state.grantGroup.setInput(this.state.searchInput);
		this.clearInput();
	};

	clearInput = () => {
		this.setState({ searchInput: '' });
	};

	render() {
		return (
			<div className="graph-container">
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name="name" value={this.state.searchInput} onChange={this.handleInput} />
					</label>
					<input type="submit" value="Submit" />
				</form>
				{this.state.data && <GraphComponent data={this.state.data} />}
			</div>
		);
	}
}
