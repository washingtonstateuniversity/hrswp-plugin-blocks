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
	title: __( 'HRS Search Filter' ),
	icon: 'filter',
	category,
	description: __( 'Search and filter a section of content by full text.' ),
	keywords: [ __( 'filter search' ) ],
	supports,
	attributes,
	edit,
	save,
};
