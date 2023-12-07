import { useRouteLoaderData } from '@remix-run/react';
import { Championship } from '#app/modules/api/model/championship';
import type { loader } from '#app/routes/_foh+/_layout';

export function useChampionships() {
	const data = useRouteLoaderData<typeof loader>('routes/_foh+/_layout');
	return Championship.array().parse(data?.championships);
}
