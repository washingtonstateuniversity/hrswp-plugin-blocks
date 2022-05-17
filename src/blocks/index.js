/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as accordionHeading from './accordion-heading';
import * as accordionSection from './accordion-section';
import * as accordions from './accordions';
import * as button from './button';
import * as buttons from './buttons';
import * as postsList from './posts-list';
import * as filter from './filter';
import * as filterSection from './filter-section';
import * as callout from './callout';
import * as notification from './notification';
import * as sidebar from './sidebar';
import * as spacer from './spacer';

const hrsBlocks = [
	accordionHeading,
	accordionSection,
	accordions,
	button,
	buttons,
	postsList,
	filter,
	filterSection,
	callout,
	notification,
	sidebar,
	spacer,
];

const hiddenBlocks = [
	'core/button',
	'core/buttons',
	'core/code',
	'core/preformatted',
	'core/spacer',
	'core/verse',
];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = (block) => {
	if (!block) {
		return;
	}
	const { metadata, settings, name } = block;
	registerBlockType(name, {
		...metadata,
		...settings,
	});
};

/**
 * Function to register plugin blocks.
 *
 * @example
 * ```js
 * import { registerBlocks } from './blocks';
 *
 * registerBlocks();
 * ```
 */
export const registerBlocks = () => {
	hrsBlocks.forEach(registerBlock);
};

export const hideBlocks = () => {
	dispatch('core/edit-post').hideBlockTypes(hiddenBlocks);
};
