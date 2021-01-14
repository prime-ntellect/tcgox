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
		if (searchTerm && searchTerm !== 'undefined') {
			router.replace(`/search?search=${searchTerm}`);
		}
	}, [searchTerm, router]);

	return (
		<div style={{ position: 'sticky', top: '0', zIndex: '2', background: 'white' }}>
			<div style={{ height: '24px', background: 'white' }} />
			<div
				style={{
					padding: '10px 24px',
					width: '100%',
					maxWidth: '100%',
					borderRadius: '36px',
					margin: '0 auto',
					background: '#F2F2F7',
					display: 'flex',
				}}
			>
				{/*<img
				href=""
				style={{ marginRight: '24px', height: '18px', width: '18px', marginTop: '5px' }}
			/>*/}
				<input
					autoFocus
					style={{
						fontSize: '18px',
						fontWeight: 500,
						lineHeight: '28px',
						padding: 0,
						background: 'transparent',
						border: 'none',
						flexGrow: '1',
					}}
					placeholder="search"
					value={search}
					onChange={handleChangeSearch}
				/>
			</div>
			<div style={{ height: '24px', background: 'white' }} />
		</div>
	);
};

export default Search;
