import { ApolloClient, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import storage from 'app-utils/storage';

const cache = new InMemoryCache();

const persist = async () => {
	await persistCache({ cache, storage });
};

const client = new ApolloClient({
	uri: 'https://api.twetch.app/graphql',
	cache,
});

export { client as default, persist };
