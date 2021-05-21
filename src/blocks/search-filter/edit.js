/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor;

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
const ALLOWED_BLOCKS = [
	'hrswp/search-filter-input',
	'hrswp/search-filter-section',
];

/**
 * The block template.
 *
 * This is locked so that the search input field is always first, followed
 * by a search filter section to contain the content to be searched.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	[ 'hrswp/search-filter-input' ],
	[ 'hrswp/search-filter-section' ],
];

function SearchFilterEdit( { className, attributes, setAttributes } ) {
	const { retainHeadings } = attributes;

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
			<div
				className={ classnames( className, {
					'has-retain-headings': retainHeadings,
				} ) }
			>
				<InnerBlocks
					templateLock="all"
					template={ TEMPLATE }
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</div>
		</>
	);
}

export default SearchFilterEdit;
