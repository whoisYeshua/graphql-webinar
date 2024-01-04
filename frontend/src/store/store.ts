import { configureStore } from '@reduxjs/toolkit'

import feed from './slices/feed'

export const store = configureStore({
	reducer: {
		feed,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
