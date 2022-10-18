/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import icon from './icon';

const { name } = metadata;

export { metadata, name };

/* @todo Try reworking the salary data and job class blocks on the WP query block to get around the data leak issue */

export const settings = {
	icon,
	example: {},
	edit,
};
