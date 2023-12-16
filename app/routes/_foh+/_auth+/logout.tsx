import { logout } from '#app/modules/auth/auth.server';
import type { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
	return logout(request);
}
