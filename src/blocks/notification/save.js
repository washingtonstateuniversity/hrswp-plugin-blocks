/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

export default function save( { attributes, className } ) {
	const { showActionButton } = attributes;

	return (
		<div
			className={ classnames( className, {
				'has-action-button': showActionButton,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
