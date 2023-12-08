import { useContext } from 'react';
import { FohContext } from './foh-context';

export function useChampionship() {
	const { championship, championshipSegment, setChampionship } =
		useContext(FohContext);
	return {
		championship,
		championshipSegment,
		setChampionship,
	};
}
