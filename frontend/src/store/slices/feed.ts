import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import { getContinents, getCountries, getLanguages } from '$api/rest'

import type { RootState } from '$store'

export const fetchFeed = createAsyncThunk(
	'feed/fetchFeed',
	async ({ countryLimit }: { countryLimit?: number } = {}, thunkApi) => {
		const continentsDataMap = await getContinents({ signal: thunkApi.signal })

		const countryCodes = Object.entries(continentsDataMap)
			.map(([, continent]) =>
				countryLimit ? continent.countries.slice(0, countryLimit) : continent.countries
			)
			.flat()

		const countryCodesUniq = Array.from(new Set(countryCodes))

		const countriesDataMap = await getCountries(countryCodesUniq, { signal: thunkApi.signal })

		const languageCodes = Object.entries(countriesDataMap)
			.map(([, country]) => country.languages)
			.flat()
			.filter(Boolean) as string[]
		const languageCodesUniq = Array.from(new Set(languageCodes))

		const languagesDataMap = await getLanguages(languageCodesUniq, { signal: thunkApi.signal })

		return {
			continents: continentsDataMap,
			countries: countriesDataMap,
			languages: languagesDataMap,
		}
	}
)

interface ContinentsState {
	loading: boolean
	data: {
		continents: Awaited<ReturnType<typeof getContinents>>
		countries: Awaited<ReturnType<typeof getCountries>>
		languages: Awaited<ReturnType<typeof getLanguages>>
	} | null
}
const initialState: ContinentsState = {
	loading: false,
	data: null,
}

const continentsSlice = createSlice({
	name: 'feed',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFeed.pending, (state) => {
				if (!state.data) {
					state.data = initialState.data
					state.loading = true
				}
			})
			.addCase(fetchFeed.fulfilled, (state, { payload }) => {
				state.loading = initialState.loading
				state.data = payload
			})
	},
})

/* Selectors */
const rootSelector = (state: RootState) => state.feed

const continentsSelector = (state: RootState) => rootSelector(state).data?.continents
const countriesSelector = (state: RootState) => rootSelector(state).data?.countries
const languagesSelector = (state: RootState) => rootSelector(state).data?.languages

export const selectIsLoadingFeed = createSelector([rootSelector], (state) => state.loading)

export const selectContinentCodes = createSelector([continentsSelector], (state) =>
	state ? Object.keys(state) : null
)
export const selectContinentByCode = createSelector(
	[continentsSelector, (_state, code: string) => code],
	(state, code) => state?.[code]
)

export const selectCountryByCode = createSelector(
	[countriesSelector, (_state, code: string) => code],
	(state, code) => state?.[code]
)

export const selectLanguageByCode = createSelector(
	[languagesSelector, (_state, code: string) => code],
	(state, code) => state?.[code]
)

export default continentsSlice.reducer
