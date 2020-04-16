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
	example: {
		innerBlocks: [
			{
				name: 'hrswp/accordion-panel',
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
				name: 'hrswp/accordion-panel',
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
