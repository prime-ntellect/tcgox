import axios from 'axios';
import Cache from 'file-system-cache';

const cache = Cache({ ns: 'ebay-best-offer' });

const endpoint = async (req, res) => {
	try {
		const id = req.query.id;

		const cacheHit = await cache.get(id);

		if (cacheHit) {
			return res.status(200).send(cacheHit);
		}

		const { data } = await axios.post(
			'https://130point.com/wp_pages/sales/getBestOffer.php',
			`ebayID=${id}&type=simple`,
			{
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
				},
			}
		);

		const response = data.split("value='")[1].split("'")[0];
		await cache.set(id, response);

		return res.status(200).send(response);
	} catch (e) {
		console.log(e);
		return res.status(200).send();
	}
};

export default endpoint;
