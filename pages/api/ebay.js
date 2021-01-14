import ebay from 'app-utils/ebay';

const endpoint = async (req, res) => {
	try {
		const response = await ebay(req.query.search);
		return res.status(200).send(response);
	} catch (e) {
		console.log(e);
		return res.status(200).send([]);
	}
};

export default endpoint;
