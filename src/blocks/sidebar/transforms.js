/**
 * WordPress dependencies
 */
const { createBlock } = wp.blocks;

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'hrs-wsu-edu/sidebar' ],
			transform: ( innerBlocks ) => {
				return createBlock( 'hrswp/sidebar', innerBlocks );
			},
		},
	],
};

export default transforms;
