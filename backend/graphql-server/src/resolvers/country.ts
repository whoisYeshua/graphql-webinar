import { getCommonFilter } from '../util/getCommonFilter.js'

import type { Resolvers } from '../types.generated.js'

export const resolvers: Resolvers = {
	Query: {
		country: (_parrent, { code }, { dataSources }) => dataSources.getCountries()[code],
		countries: (_parrent, { filter }, { dataSources }) => {
			const { limit, offset } = getCommonFilter(filter)
			return Object.values(dataSources.getCountries()).slice(offset, limit)
		},
	},
	Country: {
		subdivisions: (parrent, _args, { dataSources }) => {
			const subdivisionsMap = dataSources.getSubdivisions(parrent.code)
			if (!subdivisionsMap) return null
			return Object.entries(subdivisionsMap).map(([subdivisionKey, subdivisionValue]) => ({
				...subdivisionValue,
				code: subdivisionKey,
			}))
		},
		continent: (parrent, _args, { dataSources }) => dataSources.getContinets()[parrent.continent],
		languages: (parrent, _args, { dataSources }) =>
			parrent.languages.map((language) => dataSources.getLanguages()[language]),
	},
}
