/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	InnerBlocks,
	RichText,
} = wp.blockEditor;

export default function save( { attributes, className } ) {
	const { label } = attributes;

	return (
		<div className={ className }>
			<InnerBlocks.Content />
		</div>
	);
}
