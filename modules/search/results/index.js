import React from 'react';
import Result from '../result';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';
import CircularProgress from '@material-ui/core/CircularProgress';

import useWindowSize from 'app-utils/hooks/useWindowSize';
import useStyles from './styles';
import worker from 'app-utils/worker';

const Results = (props) => {
	const classes = useStyles();
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);
	const [results, setResults] = React.useState([]);
	const search = React.useMemo(() => queryParser(router.asPath.slice(7) || '')?.search, [router]);
	const filters = React.useMemo(() => queryParser(router.asPath.slice(7) || '')?.filters, [router]);
	const { id } = props;
	const renderResult = React.useCallback((result, index) => {
		return <Result key={index} result={result} />;
	}, []);
	const windowSize = useWindowSize();

	React.useEffect(() => {
		async function fetch() {
			setLoading(true);
			setResults([]);
			try {
				if (search) {
					const omit =
						JSON.parse(queryParser(window.location.search)?.filters || '{}')?.omitSources || [];
					const data = await worker.search(search, omit);
					setResults(data);
				}
			} catch (e) {
				setResults([]);
				console.log(e);
			}
			setLoading(false);
		}

		fetch();
	}, [search, id, filters]);

	if (windowSize.width <= 768) {
		return (
			<div className={classes.mobileRoot}>
				{loading && (
					<div className={classes.loading}>
						<CircularProgress />
					</div>
				)}
				{!loading && !!results.length && (
					<div className={classes.mobileBody}>{results.map(renderResult)}</div>
				)}
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<div className={classes.body}>
				{loading && (
					<div className={classes.loading}>
						<CircularProgress />
					</div>
				)}
				{!loading && !!results.length && results.map(renderResult)}
			</div>
		</div>
	);
};

export default Results;
