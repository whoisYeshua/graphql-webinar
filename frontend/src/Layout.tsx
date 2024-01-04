import { Outlet } from 'react-router-dom'
import { AppShell, Burger, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Navbar } from './components'

export const Layout = () => {
	const [opened, { toggle }] = useDisclosure()

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header display="flex">
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				<Title order={1} pl="0.25em">
					Main feed
				</Title>
			</AppShell.Header>
			<Navbar />
			<AppShell.Main h="100dvh">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}
