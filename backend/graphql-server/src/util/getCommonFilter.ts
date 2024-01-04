export const getCommonFilter = (
	filter?: { limit?: number | null; offset?: number | null } | null
) => {
	const offset = filter?.offset ?? 0
	const limit = filter?.limit ? filter.limit + offset : undefined
	return { offset, limit }
}
