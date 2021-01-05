import React from 'react';
import Result from './result';

import axios from 'axios';
import { useRouter } from 'next/router';
import queryParser from 'app-utils/query-parser';

import result from './result';

const Results = (props) => {
	const router = useRouter();
	const [results, setResults] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const search = React.useMemo(() => queryParser(router.asPath.slice(7) || '')?.search, [router]);
	const { id } = props;
	const renderResult = React.useCallback((result, index) => {
		return <Result key={index} result={result} />;
	}, []);

	React.useEffect(() => {
		async function fetch() {
			setLoading(true);

			try {
				if (search) {
					const { data } = await axios.get(`/api/${id}?search=${search}`);
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
			{loading && <div>Loading {id}...</div>}
			{results.map(renderResult)}
		</>
	);
};

export default Results;
