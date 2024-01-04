import { redirect } from 'react-router-dom'
import { IconApi, IconBrandGraphql } from '@tabler/icons-react'

import { GraphqlFeed, RestFeed } from '$pages'

export const routes = [
	{
		index: true,
		loader: () => redirect('graphl/feed'),
	},
	{
		path: 'graphl/feed',
		element: <GraphqlFeed />,
		label: 'GraphQL',
		IconComponent: IconBrandGraphql,
	},
	{
		path: 'rest/feed',
		element: <RestFeed />,
		label: 'REST',
		IconComponent: IconApi,
	},
]
