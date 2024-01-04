import { getCommonFilter } from '../util/getCommonFilter.js'

import type { Resolvers } from '../types.generated.js'

export const resolvers: Resolvers = {
	Query: {
		continent: (_parrent, { code }, { dataSources }) => dataSources.getContinets()[code],
		continents: (_parrent, _args, { dataSources }) => Object.values(dataSources.getContinets()),
	},
	Continent: {
		countries: (parrent, { filter }, { dataSources }) => {
			const { limit, offset } = getCommonFilter(filter)
			return parrent.countries
				.map((country) => dataSources.getCountries()[country])
				.slice(offset, limit)
		},
	},
}
