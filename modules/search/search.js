import React from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';

const Search = () => {
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
	}, [searchTerm, router]);

	return (
		<input
			autoFocus
			style={{
				height: '48px',
				fontSize: '20px',
				lineHeight: '48px',
				padding: '0 16px',
				width: '600px',
				maxWidth: '100%',
				borderRadius: '36px',
				margin: '24px auto',
				display: 'block',
				background: '#F3F2F8',
				border: 'none',
				fontWeight: 'bold',
			}}
			value={search}
			onChange={handleChangeSearch}
		/>
	);
};

export default Search;
