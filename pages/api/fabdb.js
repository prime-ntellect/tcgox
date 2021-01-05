import axios from 'axios';
import cheerio from 'cheerio';

const endpoint = async (req, res) => {
	try {
		const { data } = await axios.get(`https://fabdb.net/api/cards?keywords=${req.query.search}`);

		const results = [];

		await Promise.all(
			data.data.map(async (each) => {
				const type = each.identifier.slice(0, 3).toLowerCase();
				const num = parseInt(each.identifier.slice(3));
				const { data: cardData } = await axios.get(
					`https://fabdb.net/api/cards/${each.identifier}`
				);

				cardData.listings.map((e) => {
					results.push({
						url: `https://fabdb.net/cards/${each.identifier}`,
						title: each.name,
						condition: `${e.variant} Rarity: ${each.rarity}`,
						icon: `https://fabdb2.imgix.net/cards/${type}/${num}.png?w=450&fit=clip&auto=compress`,
						price: `$${e.price} ${e.currency}`,
						store: e.store.name,
						storeUrl: `${e.domain}${e.path}`,
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
