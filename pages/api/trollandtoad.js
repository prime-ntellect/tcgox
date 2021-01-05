import trollandtoad from 'app-utils/trollandtoad';

const endpoint = async (req, res) => {
	try {
		const response = await trollandtoad(req.query.search);
		res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
		return res.status(200).send(response);
	} catch (e) {
		console.log(e);
		return res.status(200).send([]);
	}
};

export default endpoint;
