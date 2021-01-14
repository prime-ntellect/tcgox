import axios from 'axios';
import cheerio from 'cheerio';

const parse = async (search) => {
	const words = (search || '').toLowerCase().split(' ').join('+');
	const { data } = await axios.get(
		`https://www.trollandtoad.com/category.php?items-pp=60&search-words=${words}&selected-cat=0&sort-order=H-L&page-no=1&view=list&subproduct=0`
	);
	const $ = cheerio.load(data);
	const response = [];

	$('.result-container')
		.children()
		.children()
		.map(function () {
			const d = $(this);
			const icon = d.children().find('.productImage').attr('src').replace('small', 'pictures');
			const title = d.children().find('.product-info .card-text').text();
			d.children()
				.find('.buying-options-table .row')
				.map(function () {
					const e = $(this);
					const description = e.find('div:nth-child(2) a').text();
					const price = e.find('div:nth-child(4)').text();

					if (!description || !price) {
						return;
					}

					response.push({
						store: 'trollandtoad',
						title,
						icon,
						description,
						url: `https://trollandtoad.com/${e.find('div:nth-child(2) a').attr('href')}`,
						price,
					});
				});
		});

	return response;
};

export default parse;
