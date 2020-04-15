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
import icon from './icon';

const { name, category, supports, attributes } = metadata;

export { name };

export const settings = {
	title: __( 'Accordion' ),
	icon,
	category,
	description: __( 'Display content in an accordion.' ),
	keywords: [ __( 'layout' ), __( 'accordion' ) ],
	supports,
	attributes,
	edit,
	save,
};
