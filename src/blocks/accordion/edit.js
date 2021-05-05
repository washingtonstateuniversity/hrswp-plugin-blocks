/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { sprintf, __ } = wp.i18n;
const { useCallback, useState, useRef } = wp.element;
const {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	InspectorAdvancedControls,
	RichText,
	useBlockProps,
	__experimentalUseInnerBlocksProps: useInnerBlocksProps,
	store: blockEditorStore,
} = wp.blockEditor;
const { useSelect, useDispatch } = wp.data;
const { createBlock } = wp.blocks;

function AccordionEdit( {
	attributes: { headingContent, elementId, headingLevel, placeholder },
	setAttributes,
	clientId,
} ) {
	const classes = 'hrswp-block-accordion';

	const { accordionsIds, hasChildBlocks, rootClientId } = useSelect(
		( select ) => {
			const { getBlockOrder, getBlockRootClientId } = select(
				blockEditorStore
			);

			const rootId = getBlockRootClientId( clientId );

			return {
				hasChildBlocks: getBlockOrder( clientId ).length > 1,
				rootClientId: rootId,
				accordionsIds: getBlockOrder( rootId ),
			};
		},
		[ clientId ]
	);

	const blockProps = useBlockProps( { className: classes } );

	const panelsCount = accordionsIds.length;
	const currentPanelPosition = accordionsIds.indexOf( clientId ) + 1;

	const label = sprintf(
		/* */
		__( '%1$s (%2$s of %3$s)' ),
		blockProps[ 'aria-label' ],
		currentPanelPosition,
		panelsCount
	);

	const innerBlocksProps = useInnerBlocksProps(
		{ ...blockProps, 'aria-label': label },
		{
			template: [	[ 'hrswp/accordion-heading', {}	] ],
			templateLock: false,
			renderAppender: hasChildBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	const setPanelContent = ( newContent ) => {
		setAttributes( { headingContent: newContent } );
		// setAttributes( {
		// 	elementId: `accordion-panel-id-${ instanceId }`,
		// } );
	};

	const tagName = 'h' + headingLevel;

	return (
		<>
			{/* <RichText
				aria-label={ __( 'Accordion panel text' ) }
				placeholder={  }
				value={ headingContent }
				onChange={ ( value ) => setPanelContent( value ) }
				allowedFormats={ [ 'italic' ] }
				className={ 'accordion-panel-heading' }
				tagName={ tagName }
			/> */}
			<div { ...innerBlocksProps } />
		</>
	);
}

export default AccordionEdit;
