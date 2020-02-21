/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
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
