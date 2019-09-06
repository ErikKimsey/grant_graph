import * as d3 from 'd3';
import axios from 'axios';

const draw = (data, ref) => {
	console.log(data);

	const margin = { top: 100, right: 120, bottom: 100, left: 40 };
	const width = 960 - margin.left - margin.right;
	const height = 50 - margin.top - margin.bottom;

	const x = d3.scaleBand().rangeRound([ 0, width ], 0.1).paddingInner(0.1);
	const y = d3.scaleLinear().range([ height, 0 ]);

	const xAxis = d3.axisBottom().scale(x);
	const yAxis = d3.axisLeft().scale(y).ticks(10, '%');

	const svg = d3
		.select('body')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
};

export default draw;
