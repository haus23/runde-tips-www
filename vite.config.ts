import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { flatRoutes } from 'remix-flat-routes';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		remix({
			ignoredRouteFiles: ['**/*'],
			routes: async (defineRoutes) => flatRoutes('routes', defineRoutes),
		}),
	],
});
