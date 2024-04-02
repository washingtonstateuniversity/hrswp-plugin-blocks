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

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: 'filter',
	example: {
		innerBlocks: [
			{
				name: 'hrswp/filter-section',
				innerBlocks: [
					{
						name: 'core/list',
						innerBlocks: [
							{
								name: 'core/list-item',
								attributes: {
									content: __( 'Alice.' ),
								},
							},
							{
								name: 'core/list-item',
								attributes: {
									content: __( 'The White Rabbit.' ),
								},
							},
							{
								name: 'core/list-item',
								attributes: {
									content: __( 'The Cheshire Cat.' ),
								},
							},
						],
					},
				],
			},
		],
	},
	edit,
	save,
};
