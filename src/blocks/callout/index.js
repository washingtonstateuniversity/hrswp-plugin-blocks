/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import icon from './icon';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	example: {
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					fontSize: 'large',
					/* translators: example text. */
					content: __( 'Riverside Wren (Cantorchilus semibadius)' ),
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					/* translators: example text. */
					content: __(
						'The wren<br>Earns his living<br>Noiselessly.'
					),
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					/* translators: example text. */
					content: __( '— Kobayashi Issa (一茶)' ),
				},
			},
		],
	},
	edit,
	save,
};
