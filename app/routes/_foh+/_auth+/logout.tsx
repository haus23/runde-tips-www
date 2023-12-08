import type { DataFunctionArgs } from '@remix-run/node';
import { logout } from '#app/modules/auth/auth.server';

export async function loader({ request }: DataFunctionArgs) {
	return logout(request);
}
