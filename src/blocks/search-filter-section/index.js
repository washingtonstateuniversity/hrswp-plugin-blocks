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

const { name, category, supports } = metadata;

export { name };

export const settings = {
	title: __( 'HRS Search Filter Section' ),
	parent: [ 'hrswp/search-filter' ],
	icon: 'filter',
	category,
	description: __( 'A single section of content to search within.' ),
	supports,
	edit,
	save,
};
