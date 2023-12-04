import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import { ClientHintCheck } from './components/client-hint-check';

import './styles.css';

export default function App() {
	return (
		<html lang="de" className="dark">
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
