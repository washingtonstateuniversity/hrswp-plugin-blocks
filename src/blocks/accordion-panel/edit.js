/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, RichText } = wp.blockEditor;
const { withInstanceId } = wp.compose;

function AccordionPanelEdit( { attributes, setAttributes, instanceId } ) {
	const { panelHeadingContent, elementId } = attributes;

	setAttributes( { elementId: `panel-id-${ instanceId }` } );

	return (
		<div data-accordion-panel>
			<RichText
				tagName="h2"
				value={ panelHeadingContent }
				allowedFormats={ [ 'italic' ] }
				onChange={ ( content ) =>
					setAttributes( { panelHeadingContent: content } )
				}
				placeholder={ __( 'Brief panel heading…' ) }
				id={ elementId }
			/>
			<InnerBlocks
				templateLock={ false }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
			/>
		</div>
	);
}

export default withInstanceId( AccordionPanelEdit );
