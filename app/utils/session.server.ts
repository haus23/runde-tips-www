import { createCookieSessionStorage } from '@remix-run/node';

import type { Theme } from './theme';

type SessionData = {
	theme: Theme;
};

const { getSession: getRawSession, commitSession } =
	createCookieSessionStorage<SessionData>({
		cookie: {
			name: '__prefs',
			sameSite: 'lax',
			path: '/',
			httpOnly: true,
			secrets: [process.env.SESSION_SECRET],
			secure: process.env.NODE_ENV === 'production',
		},
	});

async function getSession(request: Request) {
	return getRawSession(request.headers.get('Cookie'));
}

export { getSession, commitSession };
