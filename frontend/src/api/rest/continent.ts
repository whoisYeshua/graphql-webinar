import { rest } from './config'
import { continentsUrl } from './urls'

interface Continent {
	code: string
	name: string
	countries: string[]
}

type ContinentsResponse = Record<string, Continent>

export const getContinents = async ({ signal }: { signal?: AbortSignal } = { signal: undefined }) =>
	rest.get<ContinentsResponse>(continentsUrl, { signal })
