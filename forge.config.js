require('dotenv').config();

module.exports = {
	packagerConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-dmg',
			config: {
				format: 'ULFO',
			},
		},
	],
	publishers: [
		{
			name: '@electron-forge/publisher-github',
			config: {
				authToken: process.env.GITHUB_TOKKEN,
				repository: {
					owner: 'prime-ntellect',
					name: 'tcgox.app',
				},
				prerelease: true,
			},
		},
	],
};
