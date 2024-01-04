import { rest } from './config'
import { countriesUrl } from './urls'

interface Country {
	code: string
	continent: string
	currency?: string[]
	emoji?: string[]
	languages?: string[]
	name: string
	native?: string
	phone?: string[]
}

type CountriesResponse = Record<string, Country>

export const getCountries = async (code: string[], { signal }: { signal?: AbortSignal }) =>
	rest.get<CountriesResponse>(countriesUrl, { query: { code }, signal })
