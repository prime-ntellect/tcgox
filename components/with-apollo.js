import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient, { persist } from 'app-utils/apollo';

const withApollo = (Component) => {
	return (props) => {
		const [cached, setCached] = React.useState(false);
		const persistCache = React.useCallback(async () => {
			await persist();
			setCached(true);
		}, []);

		React.useLayoutEffect(() => {
			persistCache();
		}, [persistCache]);

		if (!cached) {
			return <div>persisting</div>;
		}

		return (
			<ApolloProvider client={apolloClient}>
				<Component {...props} />
			</ApolloProvider>
		);
	};
};

export default withApollo;
