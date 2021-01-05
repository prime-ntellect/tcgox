import Module from 'app-modules/home';
import withApollo from 'app-components/with-apollo';

const HomePage = () => {
	return <Module />;
};

export default withApollo(HomePage);
