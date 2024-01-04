import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const gqlBackendUrl = 'http://localhost:4000'
const restBackendUrl = 'http://localhost:4001'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		proxy: {
			'/graphql': gqlBackendUrl,
			'/api': restBackendUrl,
		},
	},
})
