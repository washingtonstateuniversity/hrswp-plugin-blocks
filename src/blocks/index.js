/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import * as accordion from './accordion';
import * as accordionPanel from './accordion-panel';
import * as button from './button';
import * as buttons from './buttons';
import * as postsList from './posts-list';
import * as searchFilter from './search-filter';
import * as searchFilterSection from './search-filter-section';
import * as searchFilterInput from './search-filter-input';
import * as callout from './callout';
import * as notification from './notification';
import * as sidebar from './sidebar';

const hrsBlocks = [
	accordion,
	accordionPanel,
	button,
	buttons,
	postsList,
	searchFilter,
	searchFilterSection,
	searchFilterInput,
	callout,
	notification,
	sidebar,
];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;
	registerBlockType( name, {
		...metadata,
		...settings,
	} );
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
	hrsBlocks.forEach( registerBlock );
};
