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
} = metadata;

export { name };

export const settings = {
	title: __( 'HRS Search Filter' ),
	icon: 'filter',
	category,
	description: __( 'Filter a section of content by heading or full text.' ),
	keywords: [ __( 'filter search' ) ],
	supports,
	edit,
	save,
};
