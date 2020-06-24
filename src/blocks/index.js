/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import * as accordion from './accordion';
import * as accordionPanel from './accordion-panel';
import * as postsList from './posts-list';
import * as searchFilter from './search-filter';
import * as searchFilterSection from './search-filter-section';
import * as searchFilterInput from './search-filter-input';
import * as callout from './callout';
import * as notification from './notification';
import * as sidebar from './sidebar';

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
	[
		accordion,
		accordionPanel,
		postsList,
		searchFilter,
		searchFilterSection,
		searchFilterInput,
		callout,
		notification,
		sidebar,
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}
		const { settings, name } = block;
		registerBlockType( name, settings );
	} );
};
