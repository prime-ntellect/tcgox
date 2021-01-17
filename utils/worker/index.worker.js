import * as Comlink from 'comlink';
import axios from 'axios';

const dataSources = ['tcgplayer', 'trollandtoad', 'ebay', 'fabdb'];
let bsvPrice = 218;
let forexPrices = {
	CAD: 1.2686407126,
	HKD: 7.7536291653,
	ISK: 129.1652919828,
	PHP: 48.0303530188,
	DKK: 6.1360112174,
	HUF: 296.5770372814,
	CZK: 21.6017815902,
	GBP: 0.7336110195,
	RON: 4.0199604091,
	SEK: 8.3354503464,
	IDR: 14043.9953810624,
	INR: 73.1297426592,
	BRL: 5.269548004,
	RUB: 73.4823490597,
	HRK: 6.2429891125,
	JPY: 104.0993071594,
	THB: 30.019795447,
	CHF: 0.8912075223,
	EUR: 0.8248102936,
	MYR: 4.0359617288,
	BGN: 1.6131639723,
	TRY: 7.3813922798,
	CNY: 6.4672550313,
	NOK: 8.5044539756,
	NZD: 1.3900527879,
	ZAR: 15.1886341142,
	USD: 1,
	MXN: 19.8299241175,
	SGD: 1.3271197625,
	AUD: 1.2901682613,
	ILS: 3.1421148136,
	KRW: 1097.3028703398,
	PLN: 3.7429066315,
};

async function init() {
	const { data: exchangeRateData } = await axios.get(
		'https://cloud-functions.twetch.app/api/exchange-rate'
	);
	bsvPrice = exchangeRateData.price;
	const { data: forexData } = await axios.get('https://api.exchangeratesapi.io/latest?base=USD');
	forexPrices = forexData.rates;
}
init();
setInterval(async () => {
	init();
}, 6000000);

const AppWorker = {
	pi: () => Math.PI,
	fetch: (...args) => {
		console.log({ args });
		return fetch(...args);
	},
	search: async (searchTerm) => {
		const responses = await Promise.all(
			dataSources.map(async (e) => {
				try {
					const { data } = await axios.get(`/api/${e}?search=${searchTerm}`);
					return data;
				} catch (e) {
					return [];
				}
			})
		);
		const results = responses
			.reduce((a, e) => a.concat(e), [])
			.map((e) => {
				let price = e.price;
				const currency = Object.keys(forexPrices).find((c) => price.includes(c)) || 'USD';

				price = (
					parseFloat(e.price.replace(',', '').match(/[\d\.]+/)) / forexPrices[currency]
				).toFixed(2);

				return {
					...e,
					parsedPrice: price,
					price: `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
					bsvPrice: (price / bsvPrice).toFixed(8),
				};
			})
			.sort((a, b) => b.parsedPrice - a.parsedPrice);

		return results;
	},
	sort: (items) => {
		return items.sort(
			(a, b) => parseFloat(b.price.match(/[\d\.]+/)) - parseFloat(a.price.match(/[\d\.]+/))
		);
	},
};

Comlink.expose(AppWorker);
