export const getQueryCodes = (queryCodes?: string[] | string) => {
	if (queryCodes) {
		if (Array.isArray(queryCodes)) return queryCodes
		return [queryCodes]
	}
	return null
}
