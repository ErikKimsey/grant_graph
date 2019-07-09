// https://bl.ocks.org/denisemauldin/2b42a8b38c9b04247a7052c9b503e6e2

import React, { useEffect } from 'react';
import * as d3 from 'd3';

console.log(d3);

/**
 * Props:
 *  - viewport dimensions (w, h),
 *  - the data,
 *  - ??
 */
const Tree = (props) => {
	useEffect(
		() => {
			d3.select('.tree > *').remove();
			draw(props);
		},
		[ props.items.length ]
	);
	return <div className="tree" />;
};

const draw = function() {
	const width = 500,
		height = 833;

	let i = 0,
		duration = 750,
		root;

	let svg = d3.select('.tree-component-container').append('svg');
	console.log(svg);

	const tree = d3.tree().size([ height, width ]);

	const diagonal = d3
		.linkHorizontal()
		.x(function(d) {
			return d.x;
		})
		.y(function(d) {
			return d.y;
		});
	// const diagonal = d3.linkHorizontal().projection(function(d) {
	// 	return [ d.y, d.x ];
	// });

	return {
		width: width,
		duration: duration,
		svg: svg
	};
};

export default Tree;
