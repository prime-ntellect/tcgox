import Module from 'app-modules/search';
import Head from 'next/head';

const HomePage = () => {
	return (
		<>
			<Head>
				<meta property="og:site_name" content="TCGOX - Trade cards for Bitcoin" />
				<meta property="og:title" content="TCGOX Search - Trade cards for Bitcoin" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Trading Card Game Exchange" />
				<meta name="description" content="Trading Card Game Exchange" />
				<meta property="og:image" content="https://tcgox.app/tcgox-icon.png" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="800" />
				<meta property="og:url" content="https://tcgox.app" />
				<meta property="twitter:card" content="summary_large_image" />
				<link rel="icon" href="https://tcgox.app/favicon.ico" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="theme-color" content="#FFFFFF" />
				<link rel="apple-touch-icon" sizes="512x512" href="https://tcgox.app/icon.png" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Module />
		</>
	);
};

export default HomePage;
