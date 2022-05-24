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

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: _x( 'Filter', 'block title' ),
	icon: 'filter',
	description: __( 'Search and filter a section of content by full text.' ),
	keywords: [ __( 'filter search' ) ],
	example: {
		innerBlocks: [
			{
				name: 'hrswp/filter-section',
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
