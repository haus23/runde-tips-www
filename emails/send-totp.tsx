import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Tailwind,
} from 'jsx-email';

export type TemplateProps = {
	username: string;
	code: string;
};

export const PreviewProps = () =>
	({
		username: 'Micha',
		code: '615243',
	}) satisfies TemplateProps;

export function Template({ username, code }: TemplateProps) {
	return (
		<Tailwind>
			<Html className="font-sans bg-gray-50">
				<Head />
				<Preview>
					Hallo {username}, hier ist dein Login-Code: {code}
				</Preview>
				<Body>
					<Container className="text-center">
						<Section>
							<p className="text-lg">
								Hallo <span className="font-semibold">{username}</span>, dein
								Login-Code lautet:
							</p>
							<p className="text-3xl tracking-wider">{code}</p>
						</Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
