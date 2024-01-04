import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { createTheme, MantineProvider } from '@mantine/core'

import { apolloClient } from '$api/gql'
import { store } from '$store'

import { router } from './router'

const theme = createTheme({
	/** Put your mantine theme override here */
})

export const Providers = () => (
	<ReduxProvider store={store}>
		<ApolloProvider client={apolloClient}>
			<MantineProvider theme={theme} defaultColorScheme="auto">
				<RouterProvider router={router} />
			</MantineProvider>
		</ApolloProvider>
	</ReduxProvider>
)
