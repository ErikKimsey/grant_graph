import * as d3 from 'd3';
import axios from 'axios';
import statsData from '../data/stats_2018.json';

// console.log(data);

const draw = (data, ref) => {
	const margin = { top: 100, right: 120, bottom: 100, left: 40 };
	const width = 960 - margin.left - margin.right;
	const height = 50 - margin.top - margin.bottom;
	console.log('chart >>>>>> ');

	d3.json
		.then((data) => {
			console.log('data');
			console.log('data');
			console.log('data');
			console.log('data');
			console.log(data.json());
		})
		.catch((err) => console.log(err));
	// console.log(_data);

	// const chart = d3.bullet;
	// console.log(chart);

	// var chart = d3.bullet().width(width).height(height);
};

export default draw;
