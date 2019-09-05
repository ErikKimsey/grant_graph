import axios from 'axios';

const getData = async () => {
	await axios
		.get(URL)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			return console.log(err);
		});
};
