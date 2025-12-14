import { Skeleton, Stack } from '@mantine/core'
import { useQuery } from '@apollo/client/react'

import { FeedDocument } from '$api/gql'
import { Continent } from './components'

export const GraphqlFeed = () => {
	const { data, loading } = useQuery(FeedDocument, {
		variables: { countryLimit: 3 },
		fetchPolicy: 'cache-and-network',
	})

	const isLoading = loading && !data

	return (
		<Skeleton visible={isLoading} h="100%">
			<Stack gap="xl" h="100%">
				{data &&
					data.continents.map((continent) => <Continent key={continent.code} {...continent} />)}
			</Stack>
		</Skeleton>
	)
}
