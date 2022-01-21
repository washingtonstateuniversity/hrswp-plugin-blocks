/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

export default function save( props ) {
	const {
		attributes: { layout = {} },
		className,
	} = props;
	const { orientation, justifyContent } = layout;

	const wrapperClasses = classnames( className, {
		[ `is-content-justification-${ justifyContent }` ]: justifyContent,
		[ `is-vertical` ]: orientation,
	} );

	const blockProps = useBlockProps.save( { className: wrapperClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
