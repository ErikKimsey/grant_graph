// https://bl.ocks.org/denisemauldin/2b42a8b38c9b04247a7052c9b503e6e2

import React, { useEffect } from 'react';
import * as d3 from 'd3';

// const data = {
// 	name: 'Eric D',
// 	children: [
// 		{
// 			name: 'Erik L',
// 			children: [
// 				{
// 					name: 'Amon',
// 					children: [ { name: 'Rabert' } ]
// 				}
// 			]
// 		},
// 		{
// 			name: 'Isaac J',
// 			children: [ { name: 'Scrooby' } ]
// 		}
// 	]
// };

/**
 * Props:
 *  - viewport dimensions (w, h),
 *  - the data,
 *  - ??
 */
const Tree = (props) => {
	console.log(props.items);
	useEffect(
		() => {
			d3.select('.tree > *').remove();
			// draw(props);
		},
		[ JSON.stringify(props.items) ]
		// [ props.data.length ]
	);
	return <div className="tree" />;
};

const draw = function(props) {
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

	root = d3.hierarchy(props.items, function(d) {
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
		let nodes = tree.descendents(),
			links = data.descendents.slice(1);

		nodes.forEach(function(d) {
			d.y = d.depth * 180;
		});

		let node = svg.selectAll('g.node').data(nodes, function(d) {
			return d.id || (d.id = ++i);
		});

		let nodeEnter = node
			.enter()
			.append('g')
			.attr('class', 'node')
			.attr('transform', function(d) {
				return `translate(${source.y0}, ${source.x0})`;
			})
			.on('click', click);

		nodeEnter
			.append('text')
			.attr('dy', '.35em')
			.attr('x', function(d) {
				return d.children || d.children ? -13 : 13;
			})
			.attr('text-anchor', function(d) {
				return d.children || d._children ? 'end' : 'start';
			})
			.text(function(d) {
				return d.data.name;
			});

		let nodeUpdate = nodeEnter.merge(node);

		nodeUpdate.transition().duration(duration).attr('transform', function(d) {
			return `translate(${d.y}, ${d.x})`;
		});

		nodeUpdate
			.select('circle.node')
			.attr('r', 20)
			.style('fill', function(d) {
				return d._children ? '#ef0772' : '#73ff6d';
			})
			.attr('cursor', 'pointer');

		/**
     *
     */
		let nodeExit = node
			.exit()
			.transition()
			.duration(duration)
			.attr('transform', function(d) {
				return `translate(${source.y},${source.x})`;
			})
			.remove();

		nodeExit.select('circle').attr('r', 1e-6);

		nodeExit.select('text').style('fill-opacity', 1e-6);

		/**
     *
     */
		let link = svg.selectAll('path.link').data(links, function(d) {
			return d.id;
		});

		let linkEnter = link.enter().insert('path', 'g').attr('class', 'link').attr('d', function(d) {
			let o = { x: source.x0, y: source.y0 };
			return diagonal(o, o);
		});

		/**
     *
     */
		let linkUpdate = linkEnter.merge(link);

		linkUpdate.transition().duration(duration).attr('d', function(d) {
			return diagonal(d, d.parent);
		});

		let linkExit = link
			.exit()
			.transition()
			.duration(duration)
			.attr('d', function(d) {
				let o = { x: source.x, y: source.y };
				return diagonal(o, o);
			})
			.remove();

		nodes.forEach(function(d) {
			d.x0 = d.x;
			d.y0 = d.y;
		});

		function diagonal(s, d) {
			let path = `M ${s.y} ${s.x}
        C ${(s.y + d.y) / 2} ${s.x},
        C ${(s.y + d.y) / 2} ${d.x},
        ${d.y} ${d.x}
      `;
			return path;
		}

		function click(d) {
			if (d.children) {
				d._children = d.children;
				d.children = null;
			} else {
				d.children = d._children;
				d._children = null;
			}
			update(d);
		}
	}
};

export default Tree;
