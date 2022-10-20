/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
import {
	InspectorControls,
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { name as filterSectionName } from '../filter-section';

const ALLOWED_BLOCKS = [ filterSectionName ];

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [ [ filterSectionName ] ];

function SearchFilterEdit( { attributes, setAttributes, className } ) {
	const { retainHeadings } = attributes;

	const wrapperClasses = classnames( className, {
		'has-retain-headings': retainHeadings,
	} );

	const blockProps = useBlockProps( { className: wrapperClasses } );
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
				<PanelBody title={ __( 'Filter Settings' ) }>
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
