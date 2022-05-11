/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useInnerBlocksProps, useBlockProps } = wp.blockEditor;

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	['core/column', { placeholder: __('Enter the main content…') }],
	['core/column', { placeholder: __('Enter the sidebar content…') }],
];

/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['core/column'];

function SidebarEdit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
		templateLock: 'all',
		orientation: 'horizontal',
		renderAppender: false,
	});

	return <div {...innerBlocksProps} />;
}

export default SidebarEdit;
