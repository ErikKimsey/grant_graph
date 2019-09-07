const PARENT_KEYS = [ 'IC', 'source', 'code', 'received', 'awarded', 'received', 'rate', 'total' ];
const returnedGrantInfo = [];
const grantTypeSearch = (input, data) => {
	// console.log(data['code']);

	let obj = data['code'];
	// console.log(obj);

	let codeNums = Object.keys(obj).filter((e, i) => {
		if (obj[e] === input) {
			return e;
		}
	});

	let allKillaz = PARENT_KEYS.filter((e, i) => {
		return Object.keys((key) => {
			// if(data[e]===)
			console.log(key);
		});
	});
	console.log(allKillaz);

	// console.log(codeNums);

	// let results = codeNums.map((e) => {
	// 	PARENT_KEYS.forEach((f, i) => {
	// 		if (f[e]) console.log(f[e]);
	// 	});
	// });
};

// const grantTypeSearch = (input, data) => {

// }

export default grantTypeSearch;
