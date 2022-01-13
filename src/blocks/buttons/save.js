/**
 * WordPress dependencies
 */
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

export default function save() {
	const innerBlocksProps = useInnerBlocksProps.save( useBlockProps.save() );
	return <div { ...innerBlocksProps } />;
}
