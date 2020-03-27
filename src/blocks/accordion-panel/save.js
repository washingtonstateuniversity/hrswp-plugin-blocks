/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText } = wp.blockEditor;

export default function save( { attributes }) {
	const { panelHeadingContent } = attributes;
	return (
		<>
			<RichText.Content
				tagName="h2"
				value={ panelHeadingContent }
			/>
			<InnerBlocks.Content />
		</>
	);
}
