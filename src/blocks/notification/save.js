/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes, className }) {
	const { showActionButton } = attributes;
	const wrapperClasses = classnames(className, {
		'has-action-button': showActionButton,
	});

	const blockProps = useBlockProps.save({ className: wrapperClasses });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} />;
}
