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
import icon from './icon';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	example: {
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					/* translators: example text. */
					content: __(
						'At length, however, Mrs. Bennet had no more to say; and Lady Lucas … was left to the comforts of cold ham and chicken.'
					),
				},
			},
			{
				name: 'hrswp/button',
				attributes: {
					/* translators: example text. */
					text: __( 'Jane Austen' ),
				},
			},
		],
	},
	edit,
	save,
};
