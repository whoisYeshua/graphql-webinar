import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'

import { schema } from './schema.js'
import { context } from './context.js'

const isDev = process.env.NODE_ENV === 'development'

const PORT = 4000

export const yoga = createYoga({
	schema,
	context,
	landingPage: false,
	// While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
	graphqlEndpoint: '/graphql',
})

if (isDev) {
	const server = createServer(yoga)

	server.listen(PORT, () => {
		console.log(`Yoga GraphQL server is running on http://localhost:${PORT}/graphql`)
	})
}
