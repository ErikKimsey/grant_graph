import * as d3 from 'd3';

console.log(d3);

const Tree = function() {
	const width = 500,
		height = 833;

	let i = 0,
		duration = 750,
		root;

	const tree = d3.tree().size([ height, width ]);

	const diagonal = d3.svg.diagonal().projection(function(d) {
		return [ d.y, d.x ];
	});

	const svg = d3.select('body').append('svg');

	return {
		width: width,
		duration: duration
	};
};

export default Tree;
