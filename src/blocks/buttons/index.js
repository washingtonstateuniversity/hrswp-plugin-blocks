/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import transforms from './transforms';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import variations from './variations';
import { buttons as icon } from './icons';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: _x( 'Buttonsy', 'block title' ),
	description: __(
		'Prompt visitors to take action with a group of button-style links.'
	),
	icon,
	keywords: [ __( 'link' ) ],
	example: {
		innerBlocks: [
			{
				name: 'hrswp/button',
				attributes: { text: __( 'Find out more' ) },
			},
			{
				name: 'hrswp/button',
				attributes: { text: __( 'Contact us' ) },
			},
		],
	},
	deprecated,
	transforms,
	edit,
	save,
	variations,
};
