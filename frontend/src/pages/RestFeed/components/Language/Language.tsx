import { HoverCard, Badge, Flex, ThemeIcon, Text } from '@mantine/core'
import { IconCircleCheckFilled } from '@tabler/icons-react'

import { useAppSelector } from '$store'
import { selectLanguageByCode } from '$store/slices/feed'

interface LanguageProps {
	code: string
}

export const Language = ({ code }: LanguageProps) => {
	const data = useAppSelector((state) => selectLanguageByCode(state, code))

	return (
		<HoverCard shadow="md">
			<HoverCard.Target>
				<Badge variant="outline" radius="sm" style={{ cursor: 'default' }}>
					{data?.name} ({code})
				</Badge>
			</HoverCard.Target>
			<HoverCard.Dropdown>
				<Flex direction="column">
					<Text size="md" fw={700}>
						{data?.native}
					</Text>
					<Text size="sm">RTL: {data?.rtl ? TrueIconElement : '-'}</Text>
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
