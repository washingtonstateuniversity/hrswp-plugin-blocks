/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText } = wp.blockEditor;

export default function save( { attributes } ) {
	const { panelHeadingContent, elementId } = attributes;
	return (
		<>
			<RichText.Content
				tagName="h2"
				className={ 'accordion-panel-heading' }
				value={ panelHeadingContent }
			/>
			<div className={ 'accordion-panel' } id={ elementId }>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
