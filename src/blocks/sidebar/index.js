/**
 * WordPress dependencies
 */
const {
	__,
	_x,
} = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import icon from './icon';
import transforms from './transforms';

const {
	name,
	category,
	supports,
} = metadata;

export { name };

export const settings = {
	title: __( 'Sidebar' ),
	icon,
	category,
	description: __( 'Display content in a sidebar-style layout (two-thirds and one-third).' ),
	keywords: [ __( 'sidebar' ), __( 'columns' ) ],
	supports,
	styles: [
		{ name: 'sidebar-right', label: _x( 'Sidebar on right', 'block style' ), isDefault: true },
		{ name: 'sidebar-left', label: _x( 'Sidebar on left', 'block style' ) },
	],
	transforms,
	edit,
	save,
};
