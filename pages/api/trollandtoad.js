import axios from 'axios';
import cheerio from 'cheerio';

const beautify_html = require('js-beautify').html;

const endpoint = async (req, res) => {
	try {
		const words = (req.query.search || '').toLowerCase().split(' ').join('+');

		console.log('here', words);

		const { data } = await axios.get(
			`https://www.trollandtoad.com/category.php?items-pp=240&search-words=${words}&selected-cat=0&sort-order=Relevance&page-no=1&view=list&subproduct=0`
		);
		console.log({ data });

		const $ = cheerio.load(data);
		const response = [];
		const results = $('.result-container').children();

		$('.result-container')
			.children()
			.children()
			.map(function () {
				const d = $(this);
				const icon = d.children().find('.productImage').attr('src').replace('small', 'pictures');
				const title = d.children().find('.product-info .card-text strong').text();
				d.children()
					.find('.buying-options-table .row')
					.map(function () {
						const e = $(this);
						const condition = e.find('div:nth-child(2) a').text();
						const url = e.find('div:nth-child(2) a').attr('href');
						const price = e.find('div:nth-child(4)').text();

						if (!condition || !price) {
							return;
						}

						response.push({
							title,
							icon,
							condition,
							url: `https://trollandtoad.com/${url}`,
							price,
						});
					});
			});

		res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
		return res.status(200).send(response);
	} catch (e) {
		console.log(e);
		return res.status(200).send([]);
	}
};

export default endpoint;
