/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText } = wp.blockEditor;

export default function save( { attributes } ) {
	const { panelHeadingContent, elementId, level } = attributes;
	const tagName = 'h' + level;

	return (
		<>
			<RichText.Content
				tagName={ tagName }
				className={ 'accordion-panel-heading' }
				value={ panelHeadingContent }
			/>
			<div className={ 'accordion-panel' } id={ elementId }>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
