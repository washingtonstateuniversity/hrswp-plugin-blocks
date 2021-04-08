/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default function save( {
	attributes: { contentJustification, orientation },
} ) {
	return (
		<div
			{ ...useBlockProps.save( {
				className: classnames( {
					[ `is-content-justification-${ contentJustification }` ]: contentJustification,
					'is-vertical': orientation === 'vertical',
				} ),
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
