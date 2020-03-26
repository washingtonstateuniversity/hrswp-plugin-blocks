/**
 * External dependencies
 */
import { dropRight, times } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, RangeControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { useSelect, withDispatch } = wp.data;
const { createBlock } = wp.blocks;

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
	...times( 5, () => {
		return [ 'hrswp/accordion-panel' ];
	} ),
];

function AccordionEditContainer( { className, clientId, updatePanels } ) {
	const { count } = useSelect(
		( select ) => {
			return {
				count: select( 'core/block-editor' ).getBlockCount( clientId ),
			};
		},
		[ clientId ]
	);

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Panels' ) }
						value={ count }
						onChange={ ( value ) => updatePanels( count, value ) }
						min={ 5 }
						max={ 30 }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className } data-accordion-block>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		</>
	);
}

const AccordionEditContainerWrapper = withDispatch(
	( dispatch, ownProps, registry ) => ( {
		/**
		 * Updates the panels count.
		 *
		 * @param {number} previousPanels
		 * @param {number} newPanels
		 */
		updatePanels( previousPanels, newPanels ) {
			const { clientId } = ownProps;
			const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
			const { getBlocks } = registry.select( 'core/block-editor' );

			let innerBlocks = getBlocks( clientId );

			const isAddingPanel = newPanels > previousPanels;

			if ( isAddingPanel ) {
				innerBlocks = [
					...innerBlocks,
					...times( newPanels - previousPanels, () => {
						return createBlock( 'hrswp/accordion-panel' );
					} ),
				];
			} else {
				// Removed panel will always be the last one.
				innerBlocks = dropRight(
					innerBlocks,
					previousPanels - newPanels
				);
			}

			replaceInnerBlocks( clientId, innerBlocks, false );
		},
	} )
)( AccordionEditContainer );

const AccordionEdit = ( props ) => {
	const { clientId, className } = props;

	const { hasInnerBlocks } = useSelect(
		( select ) => {
			return {
				hasInnerBlocks:
					select( 'core/block-editor' ).getBlocks( clientId ).length >
					0,
			};
		},
		[ clientId ]
	);

	if ( hasInnerBlocks ) {
		return <AccordionEditContainerWrapper { ...props } />;
	}

	return (
		<>
			<div className={ className } data-accordion-block>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
				/>
			</div>
		</>
	);
};

export default AccordionEdit;
