/**
 * WordPress dependencies
 */
const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save() {
	const className = 'hrswp-block-accordions-wrapper';

	return (
		<div { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
		</div>
	);
}
