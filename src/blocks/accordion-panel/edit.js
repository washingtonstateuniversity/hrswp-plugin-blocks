/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, RichText } = wp.blockEditor;
const { withInstanceId } = wp.compose;

function AccordionPanelEdit( { attributes, setAttributes, instanceId } ) {
	const { panelHeadingContent, elementId, level } = attributes;
	const tagName = 'h' + level;

	setAttributes( { elementId: `accordion-panel-id-${ instanceId }` } );

	return (
		<>
			<RichText
				tagName={ tagName }
				className={ 'accordion-panel-heading' }
				value={ panelHeadingContent }
				allowedFormats={ [ 'italic' ] }
				onChange={ ( content ) =>
					setAttributes( { panelHeadingContent: content } )
				}
				placeholder={ __( 'Brief panel heading…' ) }
			/>
			<div className={ 'accordion-panel' } id={ elementId }>
				<InnerBlocks
					templateLock={ false }
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				/>
			</div>
		</>
	);
}

export default withInstanceId( AccordionPanelEdit );
