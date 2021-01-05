import React from 'react';
import Head from 'next/head';
import { useDebounce } from 'use-debounce';
import Image from 'next/image';

import axios from 'axios';

import { useRouter } from 'next/router';

const parse = (search) => {
	return search
		.slice(1)
		.split('&')
		.reduce((a, e) => ({ ...a, [e.split('=')[0]]: e.split('=')[1] }), {});
};

import 'app-styles/Home.module.css';

const Home = () => {
	const router = useRouter();
	const renderResult = React.useCallback((result, index) => {
		return (
			<a href={result.url} target="_blank">
				<div
					key={index}
					style={{
						padding: '12px',
						display: 'flex',
						borderBottom: '1px solid rgba(0, 0, 0, .1)',
						width: '100%',
					}}
				>
					<Image src={result.icon} height={64} width={45} />
					<div style={{ marginLeft: '12px', display: 'flex', width: '100%' }}>
						<div>
							<div>{result.title}</div>
							<div>{result.condition}</div>
							<a style={{ color: 'blue' }} href={result.storeUrl} target="_blank">
								{result.store}
							</a>
						</div>
						<div style={{ flexGrow: '1' }} />
						<div>{result.price}</div>
					</div>
				</div>
			</a>
		);
	}, []);

	const [loading, setLoading] = React.useState(false);
	const [search, setSearch] = React.useState(parse(router.asPath.slice(1)).search || '');
	const [results, setResults] = React.useState([]);
	const handleChangeSearch = React.useCallback((evt) => {
		setSearch(evt.target.value);
	}, []);
	const [searchTerm] = useDebounce(search, 1000);

	React.useEffect(() => {
		async function fetch() {
			setLoading(true);
			router.replace(`/?search=${searchTerm}`);

			try {
				if (searchTerm) {
					const { data } = await axios.get(`/api/search?search=${searchTerm}`);
					setResults(data);
				}
			} catch (e) {
				setResults([]);
				console.log(e);
			}

			setLoading(false);
		}

		fetch();
	}, [searchTerm]);

	return (
		<div>
			<Head>
				<title>Trading Cards Index</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div style={{ margin: '0 auto', width: '600px', maxWidth: '100%' }}>
				<input
					style={{
						height: '36px',
						fontSize: '24px',
						lineHeight: '36px',
						width: '400px',
						maxWidth: '100%',
						borderRadius: '6px',
						margin: '24px auto',
						display: 'block',
					}}
					value={search}
					onChange={handleChangeSearch}
				/>
				{loading && <div>Loading</div>}
				{results.map(renderResult)}
			</div>
		</div>
	);
};

export default Home;
