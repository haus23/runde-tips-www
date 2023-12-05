import { useRouteLoaderData } from '@remix-run/react';
import { z } from 'zod';
import type { loader } from '#app/root';
import { invariant } from './invariant';

export const ColorScheme = z.literal('light').or(z.literal('dark'));

type ColorScheme = z.infer<typeof ColorScheme>;

export type Theme = {
	colorScheme: ColorScheme;
	isSystem: boolean;
};

export function useTheme() {
	const rootLoaderData = useRouteLoaderData<typeof loader>('root');
	invariant(rootLoaderData !== undefined, 'No root route data present');

	return {
		isSystem: rootLoaderData.requestInfo.session.data.theme?.isSystem ?? true,
		colorScheme:
			rootLoaderData.requestInfo.session.data.theme?.colorScheme ||
			rootLoaderData.requestInfo.hints.colorScheme,
	} satisfies Theme;
}
