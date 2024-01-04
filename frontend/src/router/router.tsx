import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../Layout'
import { routes } from './routes'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: routes,
	},
])
