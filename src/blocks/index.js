/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { dispatch } = wp.data;

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

/**
 * Deprecated dependencies
 */
import * as accordion from './accordion';
import * as accordionPanel from './accordion-panel';
import * as searchFilter from './search-filter';
import * as searchFilterSection from './search-filter-section';
import * as searchFilterInput from './search-filter-input';

const hrsBlocks = [
	accordion, // deprecated @1.0.0
	accordionPanel, // deprecated @1.0.0
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
	searchFilter, // deprecated @1.0.0
	searchFilterSection, // deprecated @1.0.0
	searchFilterInput, // deprecated @1.0.0
	sidebar,
];

const hiddenBlocks = [ 'core/button', 'core/buttons' ];

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

export const hideBlocks = () => {
	dispatch( 'core/edit-post' ).hideBlockTypes( hiddenBlocks );
};
