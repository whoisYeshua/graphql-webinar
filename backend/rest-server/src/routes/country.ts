import { dataSources } from '../dataSources.js'
import { getQueryCodes } from '../util/getQueryCodes.js'

import type { FastifyPluginCallback } from 'fastify'
import type { CountryDbData } from '@graphql-webinar/db'

export const countryRoutes: FastifyPluginCallback = async (server) => {
	server.get<{ Querystring: { code?: string[] | string } }>('/countries', async (request) => {
		const codes = getQueryCodes(request.query.code)
		const data = dataSources.getCountries()
		if (codes) {
			return codes.reduce(
				(acc, code) => {
					acc[code] = data[code]
					return acc
				},
				{} as Record<string, CountryDbData>,
			)
		}
		return data
	})
	server.get<{ Querystring: { code: string } }>('/country', async (request) => {
		const code = request.query.code
		return dataSources.getCountries()[code]
	})
}
