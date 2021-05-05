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
import variations from './variations';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	keywords: [ __( 'layout' ), __( 'accordion' ) ],
	variations,
	example: {
		innerBlocks: [
			{
				name: 'hrswp/accordion',
				attributes: {
					/* translators: example text. */
					panelHeadingContent: __( 'An accordion panel title' ),
					level: 2,
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							/* translators: example text. */
							content: __(
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
							),
						},
					},
				],
			},
			{
				name: 'hrswp/accordion',
				attributes: {
					/* translators: example text. */
					panelHeadingContent: __( 'Another accordion panel title' ),
					level: 2,
				},
				innerBlocks: [
					{
						name: 'core/list',
						attributes: {
							values: __(
								'<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>'
							),
						},
					},
				],
			},
		],
	},
	edit,
	save,
};
