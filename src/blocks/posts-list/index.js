/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name, category, supports, attributes } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Posts List' ),
	icon: 'filter',
	category,
	description: __( 'Display a list of posts.' ),
	keywords: [ __( 'recent posts' ) ],
	supports,
	attributes,
	example: {},
	edit,
	save,
};
