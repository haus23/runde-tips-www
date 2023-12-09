export function Logo() {
	return (
		<div className="flex items-center gap-x-1 pr-1">
			<svg className="h-10 w-10 fill-current">
				<title>Logo</title>
				<use href={'/img/logo.svg#logo'} />
			</svg>
			<span className="text-xl">runde.tips</span>
		</div>
	);
}
