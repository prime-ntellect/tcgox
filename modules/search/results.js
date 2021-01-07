import React from 'react';
import Result from './result';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';

import worker from 'app-utils/worker';

const Results = (props) => {
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
			{loading && 'loading'}
			{!loading && !results.length && 'Search for something'}
			{!loading && results.map(renderResult)}
		</>
	);
};

export default Results;
