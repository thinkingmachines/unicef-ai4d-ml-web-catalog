import { defineConfig } from 'cypress'

export default defineConfig({
	fileServerFolder: 'dist',
	fixturesFolder: 'public/api/data',
	projectId: 'ivvovd',
	e2e: {
		chromeWebSecurity: false,
		baseUrl: 'http://127.0.0.1:4173/unicef-ai4d-ml-web-catalog/',
		env: {
			// override-prefix
			URL_PREFIX: '/unicef-ai4d-ml-web-catalog'
		},
		supportFile: false,
		specPattern: 'cypress/e2e/**/*.ts'
	}
})
