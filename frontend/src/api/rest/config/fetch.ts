import { FetchError } from './Errors'
import { urlBuilder } from './urlBuilder'

import { type QueryParams } from './urlBuilder'

interface GetOptions {
	query?: QueryParams
	signal?: AbortSignal
}

type UrlBuilder = ReturnType<typeof urlBuilder>

export const get = async <Response>(urlBuilder: UrlBuilder, { query, signal }: GetOptions = {}) => {
	const url = urlBuilder(query)

	const response = await fetch(url, {
		method: 'GET',
		signal,
	})

	if (!response.ok)
		throw new FetchError({ status: response.status, statusText: response.statusText })

	return response.json() as Response
}
