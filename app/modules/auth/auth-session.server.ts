import { createCookieSessionStorage } from '@remix-run/node';

type SessionUser = {
	'user:id': number;
};

type FlashData = {
	'auth:email': string;
	'auth:secret': string;
};

export const authSession = createCookieSessionStorage<SessionUser, FlashData>({
	cookie: {
		name: '__auth',
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
		secrets: [process.env.AUTH_SESSION_SECRET],
		secure: process.env.NODE_ENV === 'production',
	},
});

export const { getSession, commitSession, destroySession } = authSession;
