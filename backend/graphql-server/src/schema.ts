import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFiles } from '@graphql-tools/load-files'

export const schema = makeExecutableSchema({
	typeDefs: await loadFiles('**/*.gql'),
	resolvers: await loadFiles('**/resolvers/*.js'),
})
