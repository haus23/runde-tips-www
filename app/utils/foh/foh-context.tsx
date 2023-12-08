import { useParams } from '@remix-run/react';
import { type ReactNode, createContext, useCallback, useState } from 'react';
import { Championship } from '#app/modules/api/model/championship';
import { useChampionships } from './use-championships';

type FohContextProps = {
	championship: Championship;
	championshipSegment: string;
	setChampionship: (championship: Championship) => void;
};

export const FohContext = createContext<FohContextProps>(undefined as never);

export function FohProvider({ children }: { children: ReactNode }) {
	const championships = useChampionships();
	const latestChampionship = Championship.parse(championships[0]);

	const { championship: slug } = useParams();

	const [currentChampionshipState, setCurrentChampionshipState] = useState(
		() => {
			const championship =
				championships.find((c) => c.slug === slug) || latestChampionship;
			return {
				championship,
				championshipSegment:
					championship.id === championships[0]?.id ? '' : championship.slug,
			};
		},
	);

	const setChampionship = useCallback(
		(championship: Championship) => {
			setCurrentChampionshipState({
				championship,
				championshipSegment:
					championship.id === latestChampionship.id ? '' : championship.slug,
			});
		},
		[latestChampionship.id],
	);

	return (
		<FohContext.Provider
			value={{ ...currentChampionshipState, setChampionship }}
		>
			{children}
		</FohContext.Provider>
	);
}
