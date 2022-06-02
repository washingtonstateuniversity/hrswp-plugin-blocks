/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blocksProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blocksProps );

	return <div { ...innerBlocksProps } />;
}
