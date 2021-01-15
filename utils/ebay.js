import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

const parse = async (searchTerm) => {
	const browser = await puppeteer.launch();
	const pages = await browser.pages();
	const [page] = pages;

	await page.goto(
		`https://www.ebay.com/sch/i.html?_from=R40&_nkw=${searchTerm}&_in_kw=1&_ex_kw=&_sacat=0&LH_Sold=1&_udlo=&_udhi=&_samilow=&_samihi=&LH_BO=1&_sadis=15&_stpos=46220&_sargn=-1%26saslc%3D1&_salic=1&_sop=13&_dmd=1&_ipg=100&LH_Complete=1&_fosrp=1`,
		{ waitUntil: 'networkidle2' }
	);
	const content = await page.content();

	const $ = cheerio.load(content);
	const response = [];

	$('#ListViewInner')
		.children()
		.map(function () {
			const e = $(this);

			const title = e.find('.lvtitle').text().trim();
			const soldBy = e.find('.lvformat').text().trim();
			const subtitle = e.find('.lvsubtitle').text().trim();
			const shipping = e.find('.lvshipping').text().trim();

			if (!title) {
				return;
			}

			response.push({
				store: 'eBay',
				title,
				icon: e.find('.lvpic img').attr('src'),
				description: `${subtitle} - ${soldBy} - ${shipping}`,
				url: e.find('.lvtitle a').attr('href'),
				price: e.find('.lvprice').text().trim(),
			});
		});

	await browser.close();
	return response;
};

export default parse;
