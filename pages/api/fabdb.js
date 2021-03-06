import axios from 'axios';

const endpoint = async (req, res) => {
	try {
		const { data } = await axios.get(`https://fabdb.net/api/cards?keywords=${req.query.search}`);

		const results = [];

		await Promise.all(
			data.data.map(async (each) => {
				const { data: cardData } = await axios.get(
					`https://fabdb.net/api/cards/${each.identifier}`
				);

				cardData.listings.map((e) => {
					results.push({
						url: `https://fabdb.net/cards/${each.identifier}`,
						title: each.name,
						description: `${e.variant} Rarity: ${each.rarity}`,
						icon: cardData.image,
						price: `$${e.price} ${e.currency}`,
						store: 'fabdb',
						storeUrl: `${e.domain}${e.path}`,
						type: 'Fixed Price',
					});
				});
			})
		);

		res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
		return res.status(200).send(results);
	} catch (e) {
		console.log(e);
		return res.status(200).send([]);
	}
};

export default endpoint;
