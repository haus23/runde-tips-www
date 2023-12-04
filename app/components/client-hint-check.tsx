import { clientHints } from '#/app/utils/client-hints';

type Hints = typeof clientHints;

function getClientHintCheckScript(hints: Hints) {
	return `
	const cookies = document.cookie.split(';').map(c => c.trim()).reduce((acc, cur) => {
		const [key, value] = cur.split('=');
		acc[key] = value;
		return acc;
	}, {});

	let cookieChanged = false;
	const hints = [
		${Object.values(hints)
			.map((hint) => {
				const cookieName = JSON.stringify(hint.cookieName);
				return `{ name: ${cookieName}, actual: String(${hint.getValueCode}), cookie: cookies[${cookieName}] }`;
			})
			.join(',\n')}
	];

	for (const hint of hints) {
		if (decodeURIComponent(hint.cookie) !== hint.actual) {
			cookieChanged = true;
			document.cookie = encodeURIComponent(hint.name) + '=' + encodeURIComponent(hint.actual) + '; Max-Age=31536000; path=/';
		}
	}

	// if the cookie changed, reload the page, unless the browser doesn't support
	// cookies (in which case we would enter an infinite loop of reloads)
	if (cookieChanged && navigator.cookieEnabled) {
		window.location.reload();
	}
`;
}

export function ClientHintCheck() {
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: getClientHintCheckScript(clientHints),
			}}
		/>
	);
}
