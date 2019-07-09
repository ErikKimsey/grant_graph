// https://bl.ocks.org/denisemauldin/2b42a8b38c9b04247a7052c9b503e6e2

import React, { useEffect } from 'react';
import * as d3 from 'd3';

const data = {
	name: 'Eric D',
	children: [
		{
			name: 'Erik L',
			children: [
				{
					name: 'Amon',
					children: [ { name: 'Rabert' } ]
				}
			]
		},
		{
			name: 'Isaac J',
			children: [ { name: 'Scrooby' } ]
		}
	]
};

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
	/**
   * 
   * Needs defining:
   *  - margin object, 
   *  - width, height,
   *  - center, focus,
   *  - duration, 
   *  - node dimensions,
   *  - root element
   *  *  *
   *  - svg node,
   *  - tree node ("treemap"),
   *  - 
   *  *  *
   *  Needed methods:
   *  - zoom(),
   *  - collapse(),
   *  - getText(),
   *  - wrap() <-- 
   */
	const margin = { top: 20, right: 20, left: 20, bottom: 20 };
	const width = 833 - margin.right - margin.left,
		height = 500 - margin.top - margin.bottom;

	let i = 0,
		duration = 750,
		root;

	let svg = d3.select('.tree-component-container').append('svg');
	svg
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const tree = d3.tree().size([ height, width ]);

	const diagonal = d3
		.linkHorizontal()
		.x(function(d) {
			return d.x;
		})
		.y(function(d) {
			return d.y;
		});

	root = d3.hierarchy(data, function(d) {
		return d.children;
	});
	root.x0 = height / 2;
	root.y0 = 0;

	root.children.forEach(collapse);

	function collapse(d) {
		if (d.childre) {
			d._children = d.children;
			d._children.forEach(collapse);
			d.children = null;
		}
	}

	function update(source) {
		let data = tree(root);
		let nodes = tree.descendents();
	}

	return {
		width: width,
		duration: duration,
		svg: svg
	};
};

export default Tree;
