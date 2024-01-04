import { isEmpty } from '$utils/isEmpty'
import { Paper, Flex, Title, Text } from '@mantine/core'

import { useAppSelector } from '$store'
import { selectCountryByCode } from '$store/slices/feed'

import { Language } from '../Language'

interface CountryProps {
	code: string
}

export const Country = ({ code }: CountryProps) => {
	const data = useAppSelector((state) => selectCountryByCode(state, code))

	if (!data) return null

	return (
		<Paper shadow="md" radius="md" withBorder p="md" bg="var(--mantine-color-dark-6)">
			<Flex justify="space-between">
				<Flex gap="4px" mb="8px">
					{data.emoji}
					<Title order={5}>{data.name}</Title>
					{data.native && <Text c="dimmed">({data.native})</Text>}
				</Flex>
				{!isEmpty(data.languages) ? (
					<Flex gap="xs">
						{data.languages.map((code) => (
							<Language key={code} code={code} />
						))}
					</Flex>
				) : (
					<Text c="dimmed" size="sm">
						No lang
					</Text>
				)}
			</Flex>
			<Flex direction="column">
				<Phone values={data.phone} />
				<Currency values={data.currency} />
			</Flex>
		</Paper>
	)
}

const LOCALE = 'en-US'

const formatList = (list: string[]) =>
	new Intl.ListFormat(LOCALE, { style: 'long', type: 'conjunction' }).format(list)

const Phone = ({ values }: { values?: string[] | null }) => (
	<span>Phone: {!isEmpty(values) ? formatList(values.map((value) => `+${value}`)) : '-'}</span>
)

const getCurrencyName = (value: string) =>
	new Intl.DisplayNames(LOCALE, { type: 'currency' }).of(value)

const Currency = ({ values }: { values?: string[] | null }) => (
	<span>
		Currency:{' '}
		{!isEmpty(values) ? formatList(values.map((value) => getCurrencyName(value) ?? value)) : '-'}
	</span>
)
