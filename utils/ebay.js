import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import moment from 'moment';
import axios from 'axios';

const proxyUrl = 'http://168.119.240.68:7331';

const parse = async (searchTerm) => {
	const browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox', `--proxy-server=${proxyUrl}`],
	});
	const pages = await browser.pages();
	const [page] = pages;

	await page.goto(
		`https://www.ebay.com/sch/i.html?_from=R40&_nkw=${searchTerm}&_in_kw=1&_ex_kw=&_sacat=0&LH_Sold=1&_udlo=&_udhi=&_samilow=&_samihi=&LH_BO=1&_sadis=15&_stpos=46220&_sargn=-1%26saslc%3D1&_salic=1&_sop=13&_dmd=1&_ipg=100&LH_Complete=1&_fosrp=1`,
		{ waitUntil: 'networkidle2' }
	);
	const content = await page.content();

	const $ = cheerio.load(content);
	let response = [];

	$('#ListViewInner')
		.children()
		.map(function () {
			const e = $(this);

			const title = e.find('.lvtitle').text().trim();
			const shipping = e.find('.lvshipping').text().trim();
			const soldOn = moment(new Date(e.find('.tme').text().trim()))
				.year(moment().year())
				.format('MM/DD');

			if (!title) {
				return;
			}

			response.push({
				ebayID: e.attr('listingid'),
				store: 'eBay',
				title,
				icon: e.find('.lvpic img').attr('src'),
				description: `Sold on ${soldOn} ${shipping}`,
				url: e.find('.lvtitle a').attr('href'),
				price: e.find('.lvprice').text().trim(),
				type: e.find('.lvformat').text().trim(),
			});
		});

	await browser.close();

	response = await Promise.all(
		response.map(async (e) => {
			if (e.type.includes('Best offer accepted')) {
				const { data } = await axios.get(`https://tcgox.app/api/ebay-best-offer?id=${e.ebayID}`);

				return { ...e, price: data };
			}

			return e;
		})
	);

	return response;
};

export default parse;
