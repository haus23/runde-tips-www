import { useLocation, useParams } from '@remix-run/react';
import { Championship } from '#app/modules/api/model/championship';
import { useChampionships } from './use-championships';

export function useChampionship() {
	const championships = useChampionships();
	const { championship: slug } = useParams();
	const { state } = useLocation();

	const stateValue = Championship.safeParse(state);
	return (
		(stateValue.success && stateValue.data) ||
		championships.find((c) => c.slug === slug) ||
		Championship.parse(championships[0])
	);
}
