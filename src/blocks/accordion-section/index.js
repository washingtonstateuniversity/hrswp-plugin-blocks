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
import icon from '../accordion-section/icon';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: _x( 'Accordion Panel', 'block title' ),
	description: __( 'A single panel of accordion content.' ),
	icon,
	keywords: [ __( 'layout' ), __( 'accordion' ) ],
	example: {
		attributes: {
			level: 2,
			panelHeadingContent: __( 'Accordion Panel Heading' ),
		},
	},
	edit,
	save,
};
