import { ApolloClient, HttpLink } from '@apollo/client'

import { apolloCache } from './apolloCache'

export const apolloClient = new ApolloClient({
	link: new HttpLink(),
	cache: apolloCache,
	connectToDevTools: true,
})
