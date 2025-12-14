// @ts-check
import jseslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

const config = defineConfig(
  globalIgnores([
    // dependencies
    'package.json',
    'package-lock.json',
    // build
    'dist',
		// misc
		'eslint.config.js',
  ]),
  jseslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooksPlugin.configs.flat['recommended-latest'],
  eslintConfigPrettier,
  {
    rules: {
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser },
    },
		plugins: {
			'react-refresh': reactRefreshPlugin,
		},
  },
)

export default config