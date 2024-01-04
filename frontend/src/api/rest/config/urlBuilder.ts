type QueryParamValue = string | number | boolean
export type QueryParams = Record<string, QueryParamValue | QueryParamValue[]> | string

const createSearchParams = (params: QueryParams) => {
	if (typeof params === 'object') {
		const formattedParams = Object.entries(params)
			.map(([key, value]) => {
				if (Array.isArray(value)) return value.map((v) => [key, String(v)])
				return [[key, String(value)]]
			})
			.flat(1)
		return new URLSearchParams(formattedParams)
	}
	return new URLSearchParams(params)
}

export const urlBuilder = (path: string) => {
	const base = window.origin + '/api/v1/'
	const url = new URL(path, base)

	return (params?: QueryParams) => {
		if (params) {
			url.search = createSearchParams(params).toString()
		}
		return url
	}
}
