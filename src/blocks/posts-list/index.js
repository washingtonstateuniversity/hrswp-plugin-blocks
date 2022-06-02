/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import { icon } from './icons';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon,
	example: {},
	edit,
};
