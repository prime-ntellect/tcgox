import React from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';

import useWindowSize from 'app-utils/hooks/useWindowSize';
import useStyles from './styles';

const Search = () => {
	const router = useRouter();
	const classes = useStyles()();
	const windowSize = useWindowSize();

	const [search, setSearch] = React.useState(queryParser(router.asPath.slice(7)).search || '');
	const handleChangeSearch = React.useCallback((evt) => {
		setSearch(evt.target.value);
	}, []);
	const [searchTerm] = useDebounce(search, 1000);

	React.useEffect(() => {
		if (searchTerm && searchTerm !== 'undefined') {
			router.replace(`/search?search=${searchTerm}`);
		}
	}, [searchTerm]);

	if (windowSize.width <= 768) {
		return (
			<div className={classes.mobileRoot}>
				<div className={classes.mobileTitle}>TCGOX</div>
				<div className={classes.mobileInputWrapper}>
					<img src="/search-icon.svg" className={classes.mobileIcon} />
					<input
						autoFocus
						className={classes.mobileInput}
						placeholder="search"
						value={search}
						onChange={handleChangeSearch}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<div className={classes.background} />
			<div className={classes.inputWrapper}>
				<img src="/search-icon.svg" className={classes.icon} />
				<input
					autoFocus
					className={classes.input}
					placeholder="search"
					value={search}
					onChange={handleChangeSearch}
				/>
			</div>
			<div className={classes.bumper} />
		</div>
	);
};

export default Search;
