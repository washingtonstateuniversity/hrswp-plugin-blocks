/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save( { attributes } ) {
	const { level } = attributes;

	const className = 'hrswp-block-accordions-wrapper';

	return (
		<div { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
		</div>
	);
}
