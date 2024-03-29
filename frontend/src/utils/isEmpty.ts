export function isEmpty(
	value: unknown
): value is null | undefined | '' | [] | Record<string, never> {
	if (value === null || value === undefined) {
		return true
	}

	if (typeof value === 'string' && value === '') {
		return true
	}

	if (Array.isArray(value) && value.length === 0) {
		return true
	}

	if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) {
		return true
	}

	return false
}
