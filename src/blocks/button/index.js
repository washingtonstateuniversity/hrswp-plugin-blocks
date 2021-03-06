/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import { icon } from './icons';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: _x( 'Button', 'block title' ),
	description: __(
		'Prompt visitors to take action with a button-style link.'
	),
	icon,
	keywords: [ __( 'link' ) ],
	example: {
		attributes: {
			className: 'is-style-fill',
			text: __( 'Call to Action' ),
		},
	},
	styles: [
		{ name: 'fill', label: __( 'Fill' ), isDefault: true },
		{ name: 'outline', label: __( 'Outline' ) },
		{ name: 'text', label: __( 'Text' ) },
		{ name: 'small', label: __( 'Small' ) },
	],
	edit,
	save,
	deprecated,
	merge: ( a, { text = '' } ) => ( {
		...a,
		text: ( a.text || '' ) + text,
	} ),
};
