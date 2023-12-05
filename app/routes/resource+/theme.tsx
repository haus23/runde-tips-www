import { type ActionFunctionArgs, json } from '@remix-run/node';
import { commitSession, getSession } from '#app/utils/session.server';
import { ColorScheme } from '#app/utils/theme';

export async function action({ request }: ActionFunctionArgs) {
	const session = await getSession(request);

	const bodyParams = await request.formData();
	const colorScheme = ColorScheme.parse(bodyParams.get('colorScheme'));

	session.set('theme', { isSystem: false, colorScheme });

	return json(null, {
		headers: { 'Set-Cookie': await commitSession(session) },
	});
}
