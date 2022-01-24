/**
 * WordPress dependencies
 */
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

export default function save() {
	const blockProps = useBlockProps.save();
	const innerBLocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBLocksProps } />;
}
