import { redirect } from '@remix-run/node';
import { redirectBack } from 'remix-utils/redirect-back';
import { invariant } from '#app/utils/invariant';
import { getUserByEmail } from '../api/foh/users';
import { commitSession, getSession } from './auth-session.server';

export async function getUserId(request: Request) {
	const session = await getSession(request.headers.get('Cookie'));
	const userId = session.get('user:id');
	return userId ?? null;
}

export async function requireAnonymous(request: Request) {
	const userId = await getUserId(request);
	if (userId) {
		throw redirectBack(request, { fallback: '/' });
	}
}

export async function login(
	request: Request,
	email: string,
	redirectTo?: string,
) {
	const session = await getSession(request.headers.get('Cookie'));

	const user = await getUserByEmail(email);
	invariant(user, 'Unknown authenticated user.');

	session.set('user:id', user.id);

	return redirect(redirectTo || '/', {
		headers: {
			'Set-Cookie': await commitSession(session),
		},
	});
}
