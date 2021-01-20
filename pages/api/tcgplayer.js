import axios from 'axios';

const endpoint = async (req, res) => {
	try {
		const search = req.query.search;
		const words = (search || '').toLowerCase().split(' ').join('+');
		const { data } = await axios.post(
			`https://mpapi.tcgplayer.com/v2/search/request?q=${words}&isList=false`,
			{
				algorithm: '',
				context: { card: {}, shippingCountry: 'US' },
				filters: { term: {}, range: {} },
				from: 0,
				listingSearch: { filters: { term: {}, range: {}, exclude: { channelExclusion: 0 } } },
				size: 24,
				sort: {},
			}
		);

		const results = [];

		data.results[0].results.map((e) => {
			results.push({
				title: e.productName,
				url: `https://shop.tcgplayer.com/${e.productLineUrlName
					.split(' ')
					.join('-')}/${e.setUrlName.split(' ').join('-')}/${e.productUrlName
					.toLowerCase()
					.split(' ')
					.join('-')}`,
				price: `$${e.marketPrice}`,
				description: `${e.productLineName} ${e.setName} ${e.rarityName}`,
				icon: `https://tcgplayer-cdn.tcgplayer.com/product/${e.productId}_200w.jpg`,
				store: 'tcgplayer',
				type: 'Fixed Price',
			});
		});

		//return res.status(200).send(data.results[0].results);
		return res.status(200).send(results);
	} catch (e) {
		console.log(e);
		return res.status(200).send([]);
	}
};

export default endpoint;
