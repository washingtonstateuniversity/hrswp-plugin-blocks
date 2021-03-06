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

export { name };

export const settings = {
	title: __( 'Accordion Panel (Deprecated)' ),
	parent: [ 'hrswp/accordion' ],
	icon: 'index-card',
	category,
	description: __( 'A single panel of accordion content.' ),
	keywords: [ __( 'layout' ), __( 'accordion' ) ],
	supports,
	attributes,
	edit,
	save,
};
