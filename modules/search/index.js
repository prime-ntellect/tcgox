import Search from './search';
import Results from './results';

import useStyles from './styles';

const Home = () => {
	const classes = useStyles()();
	return (
		<div className={classes.root}>
			<Search />
			<Results />
		</div>
	);
};

export default Home;
