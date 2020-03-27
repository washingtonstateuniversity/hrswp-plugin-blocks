/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In accordion block, the only block we allow is 'hrswp/accordion-panel'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'hrswp/accordion-panel' ];

/**
 * The block template.
 *
 * By default the block is populated with five accordion panels.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
];

const AccordionEdit = function( { className } ) {
	return (
		<div className={ className } data-accordion-block>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ false }
				template={ TEMPLATE }
			/>
		</div>
	);
};

export default AccordionEdit;
