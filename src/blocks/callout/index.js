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
