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
	title: __( 'Accordion' ),
	icon: 'index-card',
	category,
	description: __( 'Display content in an accordion.' ),
	keywords: [ __( 'layout' ), __( 'accordion' ) ],
	supports,
	edit,
	save,
};
