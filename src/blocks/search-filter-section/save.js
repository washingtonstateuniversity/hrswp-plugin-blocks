/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

export default function save( { className } ) {
	return (
		<div className={ className } aria-live="off">
			<InnerBlocks.Content />
		</div>
	);
}
