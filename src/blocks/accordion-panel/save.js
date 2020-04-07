/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText } = wp.blockEditor;

export default function save( { attributes } ) {
	const { panelHeadingContent, elementId } = attributes;
	return (
		<div data-accordion-panel>
			<RichText.Content
				tagName="h2"
				value={ panelHeadingContent }
				id={ elementId }
			/>
			<InnerBlocks.Content />
		</div>
	);
}
