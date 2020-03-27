/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { InnerBlocks, RichText } = wp.blockEditor;

function AccordionPanelEdit( { attributes, setAttributes } ) {
	const { panelHeadingContent } = attributes;

	return (
		<>
			<RichText
				tagName="h2"
				value={ panelHeadingContent }
				formattingControls={ [ 'italic' ] }
				onChange={ ( content ) => setAttributes( { panelHeadingContent: content } ) }
				placeholder={ __( 'Brief panel heading…' ) }
			/>
			<InnerBlocks
				templateLock={ false }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
			/>
		</>
	);
}

export default AccordionPanelEdit;
