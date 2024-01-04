import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'

import { schema } from './schema.js'
import { context } from './context.js'

const PORT = 4000

const yoga = createYoga({ schema, context })
const server = createServer(yoga)

server.listen(PORT, () => {
	console.log(`Yoga GraphQL server is running on http://localhost:${PORT}`)
})
