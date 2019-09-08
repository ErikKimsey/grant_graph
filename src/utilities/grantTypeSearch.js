import * as FlatToNested from 'flat-to-nested';

const PARENT_KEYS = [ 'IC', 'source', 'code', 'awarded', 'received', 'rate', 'total' ];
export default class GrantGroup {
	constructor(data, input) {
		this.data = data;
		this.input = input;
		this.code = null;
		this.source = null;
		this.awarded = null;
		this.received = null;
		this.rate = null;
		this.total = null;
		this.codeNums = [];
		this.allCodes = {};
	}

	//
	makeAllCodeObj() {
		this.allCodes = this.data['code'];
	}

	makeCodeNums() {
		Object.keys(obj).filter((e, i) => {
			if (obj[e] === input) {
				return e;
			}
		});
	}
}
