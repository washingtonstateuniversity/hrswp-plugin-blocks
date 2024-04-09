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
import { icon } from './icons';
import transforms from './transforms';
import variations from './variations';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
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
							url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
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
	transforms,
	variations,
	edit,
	save,
};
