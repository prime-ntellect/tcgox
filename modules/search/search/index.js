import React from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';
import eventEmitter from 'app-utils/event-emitter';

import ClearIcon from '@material-ui/icons/Clear';

import pkg from '../../../package.json';

import useWindowSize from 'app-utils/hooks/useWindowSize';
import useStyles from './styles';

const Search = (props) => {
	const router = useRouter();
	const classes = useStyles()();
	const windowSize = useWindowSize();

	const handleClear = React.useCallback(() => {
		setSearch('');
	}, []);

	const handleClickFilter = React.useCallback(() => {
		eventEmitter.emitEvent('render-filters');
	}, []);

	const [search, setSearch] = React.useState(queryParser(router.asPath.slice(7)).search || '');
	const handleChangeSearch = React.useCallback((evt) => {
		setSearch(evt.target.value);
	}, []);
	const [searchTerm] = useDebounce(search, 1000);
	const replace = router.replace;

	React.useEffect(() => {
		if (searchTerm && searchTerm !== 'undefined') {
			replace(
				`/search?search=${searchTerm}&filters=${
					queryParser(window.location.search)?.filters || '{}'
				}`
			);
		}
	}, [searchTerm]);

	if (windowSize.width <= 768) {
		return (
			<div className={classes.mobileRoot}>
				<div className={classes.mobileRootHeader}>
					<p className={classes.mobileTitle}>TCGOX</p>
					<p className={classes.mobileVersion}>v{pkg.version}</p>
					<div className={classes.grow} />
					<div className={classes.mobileFilter} onClick={handleClickFilter}>
						<img className={classes.mobileFilterIcon} src="/mobile-filter.svg" />
					</div>
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
					{search && <ClearIcon className={classes.mobileClearIcon} onClick={handleClear} />}
				</div>
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<div className={classes.background} />
			<div className={classes.body}>
				<div className={classes.filter} onClick={handleClickFilter}>
					<img className={classes.filterIcon} src="/filter.svg" />
				</div>
				<div className={classes.inputWrapper}>
					<input
						autoFocus
						className={classes.input}
						placeholder="Search"
						value={search}
						onChange={handleChangeSearch}
					/>
					{search && <ClearIcon className={classes.clearIcon} onClick={handleClear} />}
				</div>
			</div>
			<div className={classes.bumper} />
		</div>
	);
};

export default Search;
