import { type DataFunctionArgs, json } from '@remix-run/node';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import { ClientHintCheck } from './components/client-hint-check';

import { getHints } from './utils/client-hints.server';
import { useTheme } from './utils/theme';

import './styles.css';

export function loader({ request }: DataFunctionArgs) {
	return json({ requestInfo: { hints: getHints(request) } });
}

export default function App() {
	const { colorScheme } = useTheme();

	return (
		<html lang="de" className={colorScheme}>
			<head>
				<meta charSet="utf-8" />
				<ClientHintCheck />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
