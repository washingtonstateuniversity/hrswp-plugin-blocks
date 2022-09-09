/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes: { layout = {} },
		className,
	} = props;
	const { orientation, justifyContent } = layout;

	const wrapperClasses = classnames( className, {
		[ `is-content-justification-${ justifyContent }` ]: justifyContent,
		[ `is-${ orientation }` ]: orientation,
	} );

	const blockProps = useBlockProps.save( { className: wrapperClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
