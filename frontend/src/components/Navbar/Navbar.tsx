import { NavLink as RouterNavLink } from 'react-router-dom'
import cx from 'clsx'
import { AppShellNavbar, NavLink } from '@mantine/core'

import { routes } from '$router'

import type { TablerIconsProps } from '@tabler/icons-react'

const iconProps: TablerIconsProps = {
	size: '1rem',
	stroke: 1.5,
}

const navRoutes = routes.filter(({ path }) => path)

export const Navbar = () => {
	return (
		<AppShellNavbar>
			{navRoutes.map(({ path, label, IconComponent }) => (
				<NavLink
					key={path}
					renderRoot={({ className, ...others }) => (
						<RouterNavLink
							to={path}
							className={({ isActive }) => cx(className, { 'active-class': isActive })}
							{...others}
						/>
					)}
					label={label}
					leftSection={IconComponent && <IconComponent {...iconProps} />}
				/>
			))}
		</AppShellNavbar>
	)
}
