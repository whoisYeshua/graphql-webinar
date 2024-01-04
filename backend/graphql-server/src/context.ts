import {
	continentsData,
	countriesData,
	languagesData,
	getSubdivisionsByCountryCode,
} from '@graphql-webinar/db'

export const context = {
	dataSources: {
		getContinets: () => continentsData,
		getCountries: () => countriesData,
		getLanguages: () => languagesData,
		getSubdivisions: (countryCode: string) => getSubdivisionsByCountryCode(countryCode),
	},
}

export type GraphQlContext = typeof context
