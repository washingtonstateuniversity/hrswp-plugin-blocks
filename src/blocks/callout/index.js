/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import icon from './icon';

const { name, category, supports } = metadata;

export { name };

export const settings = {
	title: __( 'Callout' ),
	icon,
	category,
	description: __( 'Display content in a callout module.' ),
	keywords: [ __( 'callout' ), __( 'message' ) ],
	supports,
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
	styles: [
		{
			name: 'default',
			label: _x( 'Default', 'block style' ),
			isDefault: true,
		},
		{ name: 'positive', label: _x( 'Positive', 'block style' ) },
		{ name: 'caution', label: _x( 'Caution', 'block style' ) },
		{ name: 'warning', label: _x( 'Warning', 'block style' ) },
	],
	edit,
	save,
};
