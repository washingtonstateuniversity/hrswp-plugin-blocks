/**
 * External dependencies
 */
import classnames from 'classnames';
import { dropRight, get, times } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { PanelBody, RangeControl, Notice } = wp.components;
const {
	InspectorControls,
	__experimentalUseInnerBlocksProps: useInnerBlocksProps,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	__experimentalBlockVariationPicker,
	useBlockProps,
	store: blockEditorStore,
} = wp.blockEditor;
const { withDispatch, useDispatch, useSelect } = wp.data;
const {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
	store: blocksStore,
} = wp.blocks;

/**
 * Internal dependencies
 */
import { name as accordionName } from '../accordion';

const ALLOWED_BLOCKS = [ 'hrswp/accordion' ];

// const ACCORDION_TEMPLATE = [ [ 'hrswp/accordion' ], [ 'hrswp/accordion' ] ];

function AccordionsEditContainer( {
	attributes,
	updateHeadingLevel,
	updateAccordions,
	clientId,
} ) {
	const { headingLevel } = attributes;

	const { count } = useSelect(
		( select ) => {
			return {
				count: select( blockEditorStore ).getBlockCount( clientId ),
			};
		},
		[ clientId ]
	);

	const classes = 'hrswp-block-accordions-wrapper';

	const blockProps = useBlockProps( {
		className: classes,
	} );
	const innerBlockProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'vertical',
		renderAppender: false,
	} );

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Panels' ) }
						value={ count }
						onChange={ ( value ) => updateAccordions( count, value ) }
						min={ 3 }
						max={ Math.max( 75, count ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlockProps } />
		</>
	);
}

const AccordionsEditContainerWrapper = withDispatch(
	( dispatch, ownProps, registry ) => ( {
		/**
		 * Update all child Accordion blocks with...
		 */
		updateHeadingLevel( headingLevel ) {
			const { clientId, setAttributes } = ownProps;
			const { updateBlockAttributes } = dispatch( blockEditorStore );
			const { getBlockOrder } = registry.select( blockEditorStore );

			// Update own heading level.
			setAttributes( { headingLevel } );

			// Update all child blocks.
			const innerBlockClientIds = getBlockOrder( clientId );
			innerBlockClientIds.forEach( ( innerBlockClientId ) => {
				updateBlockAttributes( innerBlockClientId, {
					headingLevel,
				} );
			} );
		},

		/**
		 * Updates the accordion panels count.
		 */
		updateAccordions( previousPanels, newPanels ) {
			const { clientId } = ownProps;
			const { replaceInnerBlocks } = dispatch( blockEditorStore );
			const { getBlocks } = registry.select( blockEditorStore );

			let innerBlocks = getBlocks( clientId );

			const isAddingPanel = newPanels > previousPanels;

			if ( isAddingPanel ) {
				innerBlocks = [
					...innerBlocks,
					...times( newPanels - previousPanels, () => {
						return createBlock( 'hrswp/accordion' );
					} ),
				];
			} else {
				// Removing a column will always remove the last inner block.
				innerBlocks = dropRight(
					innerBlocks,
					previousPanels - newPanels
				);
			}

			replaceInnerBlocks( clientId, innerBlocks );
		},
	} )
)( AccordionsEditContainer );

function Placeholder( { clientId, name, setAttributes } ) {
	const { blockType, defaultVariation, variations } = useSelect(
		( select ) => {
			const {
				getBlockVariations,
				getBlockType,
				getDefaultBlockVariation,
			} = select( blocksStore );

			return {
				blockType: getBlockType( name ),
				defaultVariation: getDefaultBlockVariation( name, 'block' ),
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[ name ]
	);
	const { replaceInnerBlocks } = useDispatch( blockEditorStore );
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<__experimentalBlockVariationPicker
				icon={ get( blockType, [ 'icon', 'src' ] ) }
				label={ get( blockType, [ 'title' ] ) }
				variations={ variations }
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
					if ( nextVariation.innerBlocks ) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(
								nextVariation.innerBlocks
							),
							true
						);
					}
				} }
				allowSkip
			/>
		</div>
	);
}

const AccordionsEdit = ( props ) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
			[ clientId ]
	);

	const Component = hasInnerBlocks
		? AccordionsEditContainerWrapper
		: Placeholder;

	return <Component { ...props } />;
};

export default AccordionsEdit;
