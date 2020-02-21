/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {	InnerBlocks } = wp.blockEditor;

export default function save( {
	className,
} ) {
	const classes = classnames( className, { 'wp-block-columns': true } );

	return (
		<div className={ classes }>
			<InnerBlocks.Content />
		</div>
	);
}
