import iso_subdivisions from 'iso-3166-2'

export const { country: getSubdivisionsByCountryCodeRaw } = iso_subdivisions
import {
	continents as continentsRaw,
	countries as countriesRaw,
	languages as languagesRaw,
	getEmojiFlag,
} from 'countries-list'

import type { ICountry, TContinentCode, TCountryCode, TLanguageCode } from 'countries-list'

export const getSubdivisionsByCountryCode = (code: string) =>
	getSubdivisionsByCountryCodeRaw(code)?.sub

export interface CountryDbData extends ICountry {
	code: string
	emoji: string
	subdivisions: string[] | null
}

export const countriesData = Object.entries(countriesRaw).reduce(
	(acc, [countryKey, countryValue]) => {
		const subdivisions = getSubdivisionsByCountryCode(countryKey)
		acc[countryKey] = {
			code: countryKey,
			...countryValue,
			emoji: getEmojiFlag(countryKey as TCountryCode),
			subdivisions: subdivisions ? Object.keys(subdivisions) : null,
		}
		return acc
	},
	{} as Record<string, CountryDbData>,
)

export interface ContinentDbData {
	code: string
	name: string
	countries: string[]
}

export const continentsData = Object.entries(continentsRaw).reduce(
	(acc, [continentKey, continentValue]) => {
		const countriesCodes = Object.entries(countriesData)
			.filter(
				([, country]) =>
					country.continent === continentKey ||
					country.continents?.includes(continentKey as TContinentCode),
			)
			.map(([code]) => code)
		acc[continentKey] = {
			code: continentKey,
			name: continentValue,
			countries: countriesCodes,
		}
		return acc
	},
	{} as Record<string, ContinentDbData>,
)

export interface LanguageDbData {
	code: string
	name: string
	native: string
	rtl: boolean
	countries: string[]
}

export const languagesData = Object.entries(languagesRaw).reduce(
	(acc, [languageKey, languageValue]) => {
		const countriesCodes = Object.entries(countriesData)
			.filter(([, country]) => country.languages?.includes(languageKey as TLanguageCode))
			.map(([code]) => code)
		acc[languageKey] = {
			code: languageKey,
			...languageValue,
			rtl: Boolean(languageValue.rtl),
			countries: countriesCodes,
		}
		return acc
	},
	{} as Record<string, LanguageDbData>,
)
