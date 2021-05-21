/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

export default function save( { attributes, className } ) {
	const { retainHeadings } = attributes;

	return (
		<div
			className={ classnames( className, {
				'has-retain-headings': retainHeadings,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
