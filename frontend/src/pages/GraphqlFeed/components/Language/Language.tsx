import { HoverCard, Badge, Flex, ThemeIcon, Text } from '@mantine/core'
import { IconCircleCheckFilled } from '@tabler/icons-react'

import type { FeedQuery } from '$api/gql'

type LanguageProps = NonNullable<
	FeedQuery['continents'][number]['countries'][number]['languages']
>[number]

export const Language = ({ code, name, native, rtl }: LanguageProps) => {
	return (
		<HoverCard shadow="md">
			<HoverCard.Target>
				<Badge variant="outline" radius="sm" style={{ cursor: 'default' }}>
					{name} ({code})
				</Badge>
			</HoverCard.Target>
			<HoverCard.Dropdown>
				<Flex direction="column">
					<Text size="md" fw={700}>
						{native}
					</Text>
					<Text size="sm">RTL: {rtl ? TrueIconElement : '-'}</Text>
				</Flex>
			</HoverCard.Dropdown>
		</HoverCard>
	)
}

const TrueIconElement = (
	<ThemeIcon radius="xl" color="lime" component="span" size="0.9rem">
		<IconCircleCheckFilled style={{ width: '80%', height: '80%' }} />
	</ThemeIcon>
)
