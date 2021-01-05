const path = require('path');

const nextConfig = {
	experimental: {
		reactMode: 'concurrent',
	},
	reactStrictMode: false,
	pwa: {
		disable: false,
		register: true,
		dest: 'public',
	},
	workerLoaderOptions: {},
	images: {
		domains: [
			'52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com',
			'fabdb2.imgix.net',
		],
	},
};

module.exports = {
	...nextConfig,
	webpack(config, { dev }) {
		if (dev) {
			config.devtool = 'cheap-module-source-map';
		}

		config.resolve.alias = {
			...config.resolve.alias,
			'app-components': path.resolve(__dirname, 'components'),
			'app-configs': path.resolve(__dirname, './configs'),
			'app-consts': path.resolve(__dirname, './consts'),
			'app-icons': path.resolve(__dirname, './icons'),
			'app-layouts': path.resolve(__dirname, './layouts'),
			'app-modules': path.resolve(__dirname, './modules'),
			'app-mutations': path.resolve(__dirname, './mutations'),
			'app-styles': path.resolve(__dirname, './styles'),
			'app-utils': path.resolve(__dirname, './utils'),
		};

		return config;
	},
};
