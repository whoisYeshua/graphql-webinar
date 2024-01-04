import { dataSources } from '../dataSources.js'
import { getQueryCodes } from '../util/getQueryCodes.js'

import type { FastifyPluginCallback } from 'fastify'
import type { ContinentDbData } from '@graphql-webinar/db'

export const continentRoutes: FastifyPluginCallback = async (server) => {
	server.get<{ Querystring: { code?: string[] | string } }>('/continents', async (request) => {
		const codes = getQueryCodes(request.query.code)
		const data = dataSources.getContinets()
		if (codes) {
			return codes.reduce((acc, code) => {
				acc[code] = data[code]
				return acc
			}, {} as Record<string, ContinentDbData>)
		}
		return data
	})
	server.get<{ Querystring: { code: string } }>('/continent', async (request) => {
		const code = request.query.code
		return dataSources.getContinets()[code]
	})
}
