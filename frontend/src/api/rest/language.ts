import { rest } from './config'
import { languagesUrl } from './urls'

interface Language {
	code: string
	name: string
	native: string
	rtl: boolean
	countries: string[]
}

type LanguagesResponse = Record<string, Language>

export const getLanguages = async (code: string[], { signal }: { signal?: AbortSignal }) =>
	rest.get<LanguagesResponse>(languagesUrl, { query: { code }, signal })
