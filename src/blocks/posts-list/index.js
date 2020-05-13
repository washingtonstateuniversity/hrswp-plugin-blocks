/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';

const { name, category, supports } = metadata;

export { name };

export const settings = {
	title: __( 'Posts List' ),
	icon: 'default',
	category,
	description: __( 'Display a list of posts.' ),
	keywords: [ __( 'posts' ), __( 'latest posts' ) ],
	supports,
	example: {},
	edit,
};
