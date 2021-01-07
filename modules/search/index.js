import Search from './search';
import Results from './results';

const Home = () => {
	return (
		<div style={{ margin: '0 auto', width: '600px', maxWidth: '100%', padding: '0 16px' }}>
			<Search />
			<div
				style={{
					background: '#F3F2F8',
					borderRadius: '32px',
					padding: '16px',
					position: 'relative',
				}}
			>
				<Results />
			</div>
		</div>
	);
};

export default Home;
