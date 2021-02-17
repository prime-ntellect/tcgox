import React from 'react';

import Checkbox from '../checkbox';

import useStyles from './styles';

const FilterSources = () => {
	const classes = useStyles();

	return (
		<div>
			<p className={classes.title}>Listing Sources</p>
			<Checkbox label="eBay" value="ebay" />
			<Checkbox label="TCG Player" value="tcgplayer" />
			<Checkbox label="Fabdb" value="fabdb" />
			<Checkbox label="Troll And Toad" value="trollandtoad" />
		</div>
	);
};

export default FilterSources;
