/**
 * WordPress dependencies
 */
const { useInnerBlocksProps, useBlockProps } = wp.blockEditor;

export default function save() {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
