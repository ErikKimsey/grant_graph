import React, { Component } from 'react';
import GraphComponent from '../components/GrantComponent/GrantComponent';
import './graph_container.scss';
import statsData from '../data/stats_2018.json';
import grantTypeSearch from '../utilities/grantTypeSearch';

export default class GraphContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			searchInput: '',
			searchedGrants: []
		};
	}

	componentDidMount() {
		this.setState({ data: statsData });
	}

	handleInput = (e) => {
		console.log(e.currentTarget.value);
		this.setState({
			searchInput: e.currentTarget.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		grantTypeSearch(this.state.searchInput, this.state.data);
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
