import { isEmpty } from '$utils/isEmpty'
import { Paper, Flex, Title, Text } from '@mantine/core'

import { Language } from '../Language'
import type { FeedQuery } from '$api/gql'

type CountryProps = FeedQuery['continents'][number]['countries'][number]

export const Country = ({ name, native, emoji, phone, currency, languages }: CountryProps) => {
	return (
		<Paper shadow="md" radius="md" withBorder p="md" bg="var(--mantine-color-dark-6)">
			<Flex justify="space-between">
				<Flex gap="4px" mb="8px">
					{emoji}
					<Title order={5}>{name}</Title>
					{native && <Text c="dimmed">({native})</Text>}
				</Flex>
				{!isEmpty(languages) ? (
					<Flex gap="xs">
						{languages.map((values) => (
							<Language key={values.code} {...values} />
						))}
					</Flex>
				) : (
					<Text c="dimmed" size="sm">
						No lang
					</Text>
				)}
			</Flex>
			<Flex direction="column">
				<Phone values={phone} />
				<Currency values={currency} />
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
