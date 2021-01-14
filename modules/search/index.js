import Search from './search';
import Results from './results';

const Home = () => {
	return (
		<div style={{ margin: '0 auto', width: '100%', maxWidth: '100%', padding: '0 16px' }}>
			<Search />
			<Results />
		</div>
	);
};

export default Home;
