/**
 * WordPress dependencies
 */
const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save() {
	return (
		<>
			<div { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
