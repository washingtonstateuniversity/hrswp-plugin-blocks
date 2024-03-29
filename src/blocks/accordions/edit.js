/**
 * External dependencies
 */
import { dropRight, get, times } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, ToolbarGroup } from '@wordpress/components';
import {
	InspectorControls,
	useInnerBlocksProps,
	BlockControls,
	__experimentalBlockVariationPicker,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import HeadingLevelDropdown from './heading-level-dropdown';

const ALLOWED_BLOCKS = [ 'hrswp/accordion-section' ];

function AccordionsEditContainer( {
	attributes,
	updateHeadingLevel,
	updateAccordions,
	clientId,
} ) {
	const { level } = attributes;

	const { count } = useSelect(
		( select ) => {
			return {
				count: select( blockEditorStore ).getBlockCount( clientId ),
			};
		},
		[ clientId ]
	);

	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'vertical',
		renderAppender: false,
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<HeadingLevelDropdown
						selectedLevel={ level }
						onChange={ updateHeadingLevel }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Panels' ) }
						value={ count }
						onChange={ ( value ) =>
							updateAccordions( count, value )
						}
						min={ 1 }
						max={ Math.max( 75, count ) }
					/>
					<p className={ 'components-panels-control__help' }>
						{ __(
							'Reducing the number of panels will remove them starting at the end. Any existing content in removed panels will be deleted.'
						) }
					</p>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlockProps } />
		</>
	);
}

const AccordionsEditContainerWrapper = withDispatch(
	( dispatch, ownProps, registry ) => ( {
		/**
		 * Update all child Accordion blocks with selected heading level.
		 *
		 * @param {number} level the heading level as an integer from 1 to 6
		 */
		updateHeadingLevel( level ) {
			const { clientId, setAttributes } = ownProps;
			const { updateBlockAttributes } = dispatch( blockEditorStore );
			const { getBlockOrder, getBlockName } =
				registry.select( blockEditorStore );

			// Update own heading level.
			setAttributes( { level } );

			// Drill down to update accordion heading child blocks.
			const accordionBlockClientIds = getBlockOrder( clientId );

			accordionBlockClientIds.forEach( ( accordionBlockClientId ) => {
				updateBlockAttributes( accordionBlockClientId, {
					level,
				} );

				const innerBlockClientIds = getBlockOrder(
					accordionBlockClientId
				);

				innerBlockClientIds.forEach( ( innerBlockClientId ) => {
					const innerBlockName = getBlockName( innerBlockClientId );

					if ( 'hrswp/accordion-heading' === innerBlockName ) {
						updateBlockAttributes( innerBlockClientId, {
							level,
						} );
					}
				} );
			} );
		},

		/**
		 * Updates the panel count.
		 *
		 * @param {number} previousPanels Previous column count.
		 * @param {number} newPanels      New column count.
		 */
		updateAccordions( previousPanels, newPanels ) {
			const { clientId, attributes } = ownProps;
			const { replaceInnerBlocks } = dispatch( blockEditorStore );
			const { getBlocks } = registry.select( blockEditorStore );
			const { level } = attributes;

			let innerBlocks = getBlocks( clientId );

			const isAddingPanel = newPanels > previousPanels;

			if ( isAddingPanel ) {
				innerBlocks = [
					...innerBlocks,
					...times( newPanels - previousPanels, () => {
						return createBlock( 'hrswp/accordion-section', {
							level,
						} );
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
