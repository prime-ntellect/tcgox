import React from 'react';
import eventEmitter from 'app-utils/event-emitter';
import classNames from 'classnames';

import Sources from './sources';

import useStyles from './styles';

const Filters = () => {
	const classes = useStyles();
	const [showFilter, setShowFilter] = React.useState(false);

	const handleClickFilter = React.useCallback(() => {
		setShowFilter(!showFilter);
	}, [showFilter]);

	React.useEffect(() => {
		eventEmitter.addListener('render-filters', handleClickFilter);

		return () => {
			eventEmitter.removeListener('render-filters', handleClickFilter);
		};
	}, [handleClickFilter]);

	return (
		<div className={classNames(classes.filters, { [classes.filtersVisible]: showFilter })}>
			{showFilter && (
				<div className={classes.root}>
					<Sources />
				</div>
			)}
		</div>
	);
};

export default Filters;
