/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;
const {
	InspectorControls,
	__experimentalUseInnerBlocksProps: useInnerBlocksProps,
	useBlockProps,
} = wp.blockEditor;

/**
 * The Allowed Blocks.
 *
 * The allowed blocks constant is passed to InnerBlocks as specified here.
 * The only block allowed in the Search Filter block is the Search Filter
 * Section block (hrswp/search-filter-section).
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'hrswp/search-filter-section' ];

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [ [ 'hrswp/search-filter-section' ] ];

function SearchFilterEdit( { attributes, setAttributes } ) {
	const { retainHeadings } = attributes;
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
		templateLock: 'all',
		orientation: 'vertical',
		renderAppender: false,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Search Filter Settings' ) }>
					<ToggleControl
						label={ __( 'Retain Headings' ) }
						checked={ !! retainHeadings }
						onChange={ () =>
							setAttributes( {
								retainHeadings: ! retainHeadings,
							} )
						}
						help={
							retainHeadings
								? __(
										'Headings not matching search term will not be hidden.'
								  )
								: __( 'Toggle to always show headings.' )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlockProps } />
		</>
	);
}

export default SearchFilterEdit;
