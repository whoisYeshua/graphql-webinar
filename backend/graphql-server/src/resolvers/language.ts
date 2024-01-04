import type { Resolvers } from '../types.generated.js'

export const resolvers: Resolvers = {
	Query: {
		language: (_parrent, { code }, { dataSources }) =>
			dataSources.getLanguages()[code.toLowerCase()],
		languages: (_parrent, _args, { dataSources }) => Object.values(dataSources.getLanguages()),
	},
	Language: {
		countries: (parrent, _args, { dataSources }) =>
			parrent.countries.map((country) => dataSources.getCountries()[country]),
	},
}
