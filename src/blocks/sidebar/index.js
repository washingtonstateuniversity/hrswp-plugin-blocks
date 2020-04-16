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
import icon from './icon';
import transforms from './transforms';

const { name, category, supports } = metadata;

export { name };

export const settings = {
	title: __( 'Sidebar' ),
	icon,
	category,
	description: __(
		'Display content in a sidebar-style layout (two-thirds and one-third).'
	),
	keywords: [ __( 'sidebar' ), __( 'columns' ) ],
	supports,
	example: {
		innerBlocks: [
			{
				name: 'core/column',
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
					{
						name: 'core/image',
						attributes: {
							url:
								'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
						},
					},
					{
						name: 'core/paragraph',
						attributes: {
							/* translators: example text. */
							content: __(
								'Suspendisse commodo neque lacus, a dictum orci interdum et.'
							),
						},
					},
				],
			},
			{
				name: 'core/column',
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							/* translators: example text. */
							content: __( 'Alice in Wonderland Characters' ),
						},
					},
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
	styles: [
		{
			name: 'sidebar-right',
			label: _x( 'Sidebar on right', 'block style' ),
			isDefault: true,
		},
		{ name: 'sidebar-left', label: _x( 'Sidebar on left', 'block style' ) },
	],
	transforms,
	edit,
	save,
};
