import { Title, Stack } from '@mantine/core'

import { useAppSelector } from '$store'
import { selectContinentByCode } from '$store/slices/feed'

import { Country } from '../Country'

interface ContinentProps {
	code: string
}

export const Continent = ({ code }: ContinentProps) => {
	const data = useAppSelector((state) => selectContinentByCode(state, code))
	return (
		<>
			<Title order={3}>{data?.name}</Title>
			<Stack gap="sm">
				{data?.countries.map((code) => (
					<Country key={code} code={code} />
				))}
			</Stack>
		</>
	)
}
