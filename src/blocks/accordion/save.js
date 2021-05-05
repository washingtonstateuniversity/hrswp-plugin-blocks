/**
 * WordPress dependencies
 */
const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save() {
	const wrapperClasses = 'hrswp-block-accordion';

	return (
		<>
			<div { ...useBlockProps.save( { className: wrapperClasses } ) }>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
