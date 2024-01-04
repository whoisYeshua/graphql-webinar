import Fastify from 'fastify'

import { continentRoutes } from './routes/continent.js'
import { countryRoutes } from './routes/country.js'
import { languageRoutes } from './routes/language.js'

const PORT = 4001
const prefix = process.env.PREFIX || '/api/v1'

const fastifyOptions = {
	logger: {
		transport: {
			target: 'pino-pretty',
			options: { destination: 1 },
		},
	},
}

const server = Fastify(fastifyOptions)

const start = async () => {
	try {
		server.register(continentRoutes, { prefix })
		server.register(countryRoutes, { prefix })
		server.register(languageRoutes, { prefix })

		await server.listen({ port: PORT })
		server.log.info(`REST server is running on http://localhost:${PORT}`)
	} catch (err) {
		server.log.error(err)
		process.exit(1)
	}
}
start()
