import { ApolloClient, HttpLink } from '@apollo/client'

import { apolloCache } from './apolloCache'

export const apolloClient = new ApolloClient({
	link: new HttpLink(),
	cache: apolloCache,
	devtools: { enabled: true },
})
