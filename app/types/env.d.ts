declare namespace NodeJS {
	export interface ProcessEnv {
		DATABASE_URL: string;
		AUTH_SESSION_SECRET: string;
		SESSION_SECRET: string;
		MAILJET_API_KEY: string;
		MAILJET_SECRET: string;
	}
}
