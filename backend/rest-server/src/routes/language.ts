import { dataSources } from '../dataSources.js'
import { getQueryCodes } from '../util/getQueryCodes.js'

import type { FastifyPluginCallback } from 'fastify'
import type { LanguageDbData } from '@graphql-webinar/db'

export const languageRoutes: FastifyPluginCallback = async (server) => {
	server.get<{ Querystring: { code?: string[] | string } }>('/languages', async (request) => {
		const codes = getQueryCodes(request.query.code)
		const data = dataSources.getLanguages()
		if (codes) {
			return codes.reduce((acc, code) => {
				acc[code] = data[code]
				return acc
			}, {} as Record<string, LanguageDbData>)
		}
		return data
	})
	server.get<{ Querystring: { code: string } }>('/language', async (request) => {
		const code = request.query.code
		return dataSources.getLanguages()[code]
	})
}
