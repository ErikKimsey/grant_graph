import * as d3 from 'd3';
import axios from 'axios';
// import statsData from '../data/stats_2018.json';
// console.log(statsData);

// console.log(data);

const draw = (data, ref) => {
	console.log(data);

	const margin = { top: 100, right: 120, bottom: 100, left: 40 };
	const width = 960 - margin.left - margin.right;
	const height = 50 - margin.top - margin.bottom;
	// console.log('chart >>>>>> ');

	const chart = d3.scaleBand().rangeRound([ 0, width ], 0.1).paddingInner(0.1);
	// console.log(chart);

	// var chart = d3.bullet().width(width).height(height);
};

export default draw;
