import LogoImage from './logo.svg';

export function Logo() {
	return (
		<div className="flex items-center gap-x-1 pr-1">
			<svg className="h-10 w-10 fill-current">
				<title>Logo</title>
				<use href={`${LogoImage}#logo`} />
			</svg>
			<span className="text-xl font-semibold">runde.tips</span>
		</div>
	);
}