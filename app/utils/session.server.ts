import { createCookieSessionStorage } from '@remix-run/node';

import type { Theme } from './theme';

type SessionData = {
	theme: Theme;
};

const { getSession: getRawSession, commitSession } =
	createCookieSessionStorage<SessionData>({
		cookie: {
			name: '__prefs',
		},
	});

async function getSession(request: Request) {
	return getRawSession(request.headers.get('Cookie'));
}

export { getSession, commitSession };
