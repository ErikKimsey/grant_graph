import * as d3 from 'd3';

console.log(d3);

const Tree = (props) => {
	useEffect(
		() => {
			d3.select('.tree > *').remove();
			draw(props);
		},
		[ props.shapes.length ]
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

	const diagonal = d3.svg.diagonal().projection(function(d) {
		return [ d.y, d.x ];
	});

	// const svg = d3.select('body').append('svg');

	return {
		width: width,
		duration: duration,
		svg: svg
	};
};

export default Tree;
