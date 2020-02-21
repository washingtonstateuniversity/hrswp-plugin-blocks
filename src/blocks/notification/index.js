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

const { name, category, supports, attributes } = metadata;

export { name };

export const settings = {
	title: __( 'Notification' ),
	icon: 'block-default',
	category,
	description: __(
		'Show a brief notification message with optional action button.'
	),
	keywords: [ __( 'callout' ), __( 'message' ), __( 'link' ) ],
	supports,
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
	attributes,
	edit,
	save,
};
