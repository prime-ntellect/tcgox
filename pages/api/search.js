const axios = require('axios');

const endpoint = async (req, res) => {
	const search = req.query.search;
	const [r1, r2] = await Promise.all([
		axios.get(`https://trading-cards.vercel.app/api/fabdb?search=${search}`),
		axios.get(`https://trading-cards.vercel.app/api/trollandtoad?search=${search}`),
	]);

	const results = [].concat(r1.data).concat(r2.data);
	res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
	return res.status(200).send(results);
};

export default endpoint;
