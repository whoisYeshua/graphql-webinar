import { InMemoryCache } from '@apollo/client'

import type { StrictTypedTypePolicies } from './apolloHelpers.generated'

const typePolicies: StrictTypedTypePolicies = {
	Continent: {
		keyFields: ['code'],
	},
	Country: {
		keyFields: ['code'],
	},
	Language: {
		keyFields: ['code'],
	},
}

export const apolloCache = new InMemoryCache({ typePolicies })
