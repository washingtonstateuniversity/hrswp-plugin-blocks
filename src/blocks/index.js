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
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}
		const { settings, name } = block;
		registerBlockType( name, settings );
	} );
};
