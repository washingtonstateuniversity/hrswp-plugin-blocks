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
	edit,
	save,
};
