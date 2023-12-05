import { useRouteLoaderData } from '@remix-run/react';
import type { loader } from '#app/root';
import { invariant } from './invariant';

export function useTheme() {
	const rootLoaderData = useRouteLoaderData<typeof loader>('root');
	invariant(rootLoaderData !== undefined, 'No root route data present');

	return {
		colorScheme: rootLoaderData.requestInfo.hints.colorScheme,
	};
}
