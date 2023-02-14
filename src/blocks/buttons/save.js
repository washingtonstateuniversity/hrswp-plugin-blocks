/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const POSITION_CLASSNAMES = {
	'top left': 'is-position-top-left',
	'top center': 'is-position-top-center',
	'top right': 'is-position-top-right',
	'center left': 'is-position-center-left',
	'center center': 'is-position-center-center',
	'center right': 'is-position-center-right',
	'bottom left': 'is-position-bottom-left',
	'bottom center': 'is-position-bottom-center',
	'bottom right': 'is-position-bottom-right',
};

export default function save( props ) {
	const {
		attributes: { layout = {}, contentPosition, supportsPosition },
		className,
	} = props;
	const { orientation, justifyContent } = layout;

	const wrapperClasses = classnames( className, {
		[ `is-content-justification-${ justifyContent }` ]: justifyContent,
		[ `is-${ orientation }` ]: orientation,
		[ `has-position-support` ]: supportsPosition,
		[ POSITION_CLASSNAMES[ contentPosition ] ??
		'is-position-bottom-right' ]: supportsPosition,
	} );

	const blockProps = useBlockProps.save( { className: wrapperClasses } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />;
}
