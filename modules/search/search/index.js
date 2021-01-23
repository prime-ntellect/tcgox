import React from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';
import pkg from '../../../package.json';

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
				<div className={classes.mobileRootHeader}>
					<p className={classes.mobileTitle}>TCGOX</p>
					<p className={classes.mobileVersion}>v{pkg.version}</p>
				</div>
				<div className={classes.mobileInputWrapper}>
					<img src="/msi.svg" className={classes.mobileIcon} />
					<input
						autoFocus
						className={classes.mobileInput}
						placeholder="Search"
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
					placeholder="Search"
					value={search}
					onChange={handleChangeSearch}
				/>
			</div>
			<div className={classes.bumper} />
		</div>
	);
};

export default Search;
