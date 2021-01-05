import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
	query listPosts {
		allPosts(first: 64, orderBy: CREATED_AT_DESC) {
			nodes {
				transaction
			}
		}
	}
`;

const Query = (options) => useQuery(QUERY, options);
export default Query;
