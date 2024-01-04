import { Title, Stack } from '@mantine/core'
import { Country } from '../Country'

import type { FeedQuery } from '$api/gql'

type ContinentProps = FeedQuery['continents'][number]

export const Continent = ({ name, countries }: ContinentProps) => (
	<>
		<Title order={3}>{name}</Title>
		<Stack gap="sm">
			{countries.map((values) => (
				<Country key={values.code} {...values} />
			))}
		</Stack>
	</>
)
