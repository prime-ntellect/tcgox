require('dotenv').config();

module.exports = {
	packagerConfig: {
		icon: './public/AppIcon.icns',
		ignore: [/\.env/],
		//osxSign: {
		//'hardened-runtime': true,
		//entitlements: 'entitlements.plist',
		//'entitlements-inherit': 'entitlements.plist',
		//'signature-flags': 'library',
		//},
		//osxNotarize: {
		//appleId: process.env.APPLE_ID,
		//appleIdPassword: process.env.APPLE_ID_PASSWORD,
		//},
	},
	makers: [
		{
			name: '@electron-forge/maker-dmg',
			config: {
				name: 'TCGOX-installer',
				icon: './public/AppIcon.icns',
				format: 'ULFO',
			},
		},
	],
	publishers: [
		{
			name: '@electron-forge/maker-zip',
		},
		{
			name: '@electron-forge/publisher-github',
			icon: './public/tcgox-icon.png',
			config: {
				authToken: process.env.GITHUB_TOKKEN,
				repository: {
					owner: 'metamorphosis-of-prime-intellect',
					name: 'TCGOX',
				},
				prerelease: true,
			},
		},
	],
};
