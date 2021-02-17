import React from 'react';
import { useRouter } from 'next/router';
import useStyles from './styles';
import queryParser from 'app-utils/query-parser';

const Checkbox = (props) => {
	const { label, value } = props;
	const classes = useStyles();
	const router = useRouter();

	const [checked, setChecked] = React.useState(
		!(JSON.parse(queryParser(window.location.search).filters || '{}')?.omitSources || []).find(
			(e) => e === value
		)
	);

	const handleChange = React.useCallback(
		(evt) => {
			setChecked(evt.target.checked);

			let filters = {};

			if (router.query.filters) {
				filters = JSON.parse(router.query.filters);
			}

			if (!evt.target.checked) {
				filters.omitSources = (filters.omitSources || []).concat([value]);
			} else {
				filters.omitSources = (filters.omitSources || []).filter((e) => e !== value);
			}

			if (!filters.omitSources.length) {
				delete filters.omitSources;
			}

			router.replace(
				`/search?search=${router.query.search || ''}&filters=${JSON.stringify(filters)}`
			);
		},
		[value, router]
	);

	return (
		<div className={classes.root}>
			<input
				type="checkbox"
				onChange={handleChange}
				checked={checked}
				className={classes.checkbox}
			/>
			<p className={classes.label}>{label}</p>
		</div>
	);
};

export default Checkbox;
