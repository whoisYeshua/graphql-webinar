import { useEffect } from 'react'
import { Skeleton, Stack } from '@mantine/core'

import { useAppDispatch, useAppSelector } from '$store'
import { fetchFeed, selectContinentCodes, selectIsLoadingFeed } from '$store/slices/feed'

import { Continent } from './components'

export const RestFeed = () => {
	const dispatch = useAppDispatch()
	const loading = useAppSelector(selectIsLoadingFeed)
	const continentCodes = useAppSelector(selectContinentCodes)

	useEffect(() => {
		const promise = dispatch(fetchFeed({ countryLimit: 3 }))
		return () => {
			promise.abort()
		}
	}, [dispatch])

	return (
		<Skeleton visible={loading} h="100%">
			<Stack gap="xl" h="100%">
				{continentCodes && continentCodes.map((code) => <Continent key={code} code={code} />)}
			</Stack>
		</Skeleton>
	)
}
