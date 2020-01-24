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

const {
	name,
	category,
	supports,
	attributes,
} = metadata;

export { name };

export const settings = {
	title: __( 'HRS Search Filter Input' ),
	parent: [ 'hrswp/search-filter' ],
	icon: 'filter',
	category,
	description: __( 'A search form for the search filter block.' ),
	supports,
	attributes,
	edit,
	save,
};
