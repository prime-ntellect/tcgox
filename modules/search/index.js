import Search from './search';
import Results from './results';
import Filters from './filters';
import useStyles from './styles';

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Filters />
			<div className={classes.body}>
				<Search />
				<Results />
			</div>
		</div>
	);
};

export default Home;
