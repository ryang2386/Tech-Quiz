import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite'
        },
        specPattern: "cypress/component/**/*.{ts,tsx}",
    },
    
    e2e: {
        baseUrl: 'http://127.0.0.1:3001/',
        supportFile: 'cypress/support/e2e.js',
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    },
});