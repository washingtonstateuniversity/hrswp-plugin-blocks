/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes, className } ) {
	const { retainHeadings } = attributes;

	const wrapperClasses = classnames( className, {
		'has-retain-headings': retainHeadings,
	} );

	const blockProps = useBlockProps.save( { className: wrapperClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
