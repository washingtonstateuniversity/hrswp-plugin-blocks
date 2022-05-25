/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
	icon,
	example: {
		attributes: {
			level: 2,
			panelHeadingContent: __( 'Accordion Panel Heading' ),
		},
	},
	edit,
	save,
};
