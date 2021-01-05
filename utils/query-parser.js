const parse = (search) => {
	return search
		.slice(1)
		.split('&')
		.reduce((a, e) => ({ ...a, [e.split('=')[0]]: decodeURI(e.split('=')[1]) }), {});
};

export default parse;
