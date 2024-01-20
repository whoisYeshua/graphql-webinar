import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFiles } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'

import { resolvers as continentResolvers } from './resolvers/continent.js'
import { resolvers as countryResolvers } from './resolvers/country.js'
import { resolvers as languageResolvers } from './resolvers/language.js'

// Could be replaced with await loadFiles('**/resolvers/*.js') but not work in vercel env
export const resolvers = mergeResolvers([continentResolvers, countryResolvers, languageResolvers])

export const schema = makeExecutableSchema({
	typeDefs: await loadFiles('**/*.gql'),
	resolvers: resolvers,
})
