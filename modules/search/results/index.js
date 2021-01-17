import React from 'react';
import Result from '../result';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';
import worker from 'app-utils/worker';

const Results = (props) => {
	const classes = useStyles()();
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);
	const [results, setResults] = React.useState([]);
	const search = React.useMemo(() => queryParser(router.asPath.slice(7) || '')?.search, [router]);
	const { id } = props;
	const renderResult = React.useCallback((result, index) => {
		return <Result key={index} result={result} />;
	}, []);

	React.useEffect(() => {
		async function fetch() {
			setLoading(true);
			setResults([]);
			try {
				if (search) {
					const data = await worker.search(search);
					setResults(data);
				}
			} catch (e) {
				setResults([]);
				console.log(e);
			}
			setLoading(false);
		}

		fetch();
	}, [search, id]);

	return (
		<>
			{loading && (
				<div className={classes.loading}>
					<CircularProgress />
				</div>
			)}
			{!loading && !!results.length && (
				<div className={classes.root}>{results.map(renderResult)}</div>
			)}
		</>
	);
};

export default Results;
