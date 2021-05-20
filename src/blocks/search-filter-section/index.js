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

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: _x( 'HRS Search Filter Section', 'block title' ),
	description: __( 'A single section of content to search within.' ),
	icon,
	edit,
	save,
};
