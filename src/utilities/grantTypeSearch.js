const PARENT_KEYS = [ 'IC', 'source', 'code', 'received', 'awarded', 'received', 'rate', 'total' ];
const grantTypeSearch = (input, data) => {
	console.log(data['code']);
	let obj = data['code'];
	let codeNum = Object.keys(obj).find((key) => {
		return obj[key] === input;
	});
	PARENT_KEYS.forEach((e, i) => {
		console.log(data[e][codeNum]);
		console.log(Object.values(data[e][codeNum]));
	});

	// console.log(data['code'].keys(input));
};

export default grantTypeSearch;
