// https://web.dev/articles/user-preference-media-features-headers

export const clientHints = {
	colorScheme: {
		cookieName: 'CH-prefers-color-scheme',
		getValueCode: `window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'`,
		fallback: 'light',
		transform(value: string | null) {
			return value === 'dark' ? 'dark' : 'light';
		},
	},
};
