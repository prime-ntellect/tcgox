import Ebay from 'ebay-node-api';

const client = new Ebay({
	clientID: 'PrimeInt-tcgox-PRD-5d4b27d4f-3c40a7fb',
});

const endpoint = async (req, res) => {
	try {
		const search = req.query.search;
		const data = await client.findItemsByKeywords({
			keywords: search,
			pageNumber: 1,
			limit: 25,
		});

		const results = [];

		data[0].searchResult[0].item.map((e) => {
			results.push({
				title: e.title[0],
				url: e.viewItemURL[0],
				price: `$${e.sellingStatus[0].convertedCurrentPrice[0].__value__}`,
				icon: e.galleryURL[0],
				store: 'ebay',
			});
		});

		return res.status(200).send(results);
	} catch (e) {
		console.log(e);
		return res.status(200).send([]);
	}
};

export default endpoint;
