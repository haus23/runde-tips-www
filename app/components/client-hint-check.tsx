import { getHintUtils } from '@epic-web/client-hints';
import { clientHint as colorSchemeHint } from '@epic-web/client-hints/color-scheme';

const { getClientHintCheckScript } = getHintUtils({
	colorScheme: colorSchemeHint,
});

export function ClientHintCheck() {
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: getClientHintCheckScript(),
			}}
		/>
	);
}
