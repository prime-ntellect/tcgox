import React from 'react';
import Head from 'next/head';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';
import Results from './results';

const Home = () => {
	const router = useRouter();

	const [search, setSearch] = React.useState(queryParser(router.asPath.slice(7)).search || '');
	const handleChangeSearch = React.useCallback((evt) => {
		setSearch(evt.target.value);
	}, []);
	const [searchTerm] = useDebounce(search, 1000);

	React.useEffect(() => {
		if (searchTerm) {
			router.replace(`/search?search=${searchTerm}`);
		}
	}, [searchTerm]);

	return (
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
			<Results id="fabdb" />
			<Results id="trollandtoad" />
		</div>
	);
};

export default Home;
