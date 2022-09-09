/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'hrs-wsu-edu/sidebar' ],
			transform: ( attributes, innerBlocks ) => {
				return createBlock( 'hrswp/sidebar', attributes, innerBlocks );
			},
		},
	],
};

export default transforms;
