/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { RichText, useBlockProps } = wp.blockEditor;

/**
 * Internal dependencies
 */
import getColorAndStyleProps from './color-props';

export default function save( { attributes, className } ) {
	const {
		borderRadius,
		linkTarget,
		rel,
		text,
		title,
		url,
		width,
	} = attributes;
	const colorProps = getColorAndStyleProps( attributes );
	const buttonClasses = classnames(
		'wp-block-button__link',
		colorProps.className,
		{
			'no-border-radius': borderRadius === 0,
		}
	);
	const buttonStyle = {
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		...colorProps.style,
	};

	// The use of a `title` attribute here is soft-deprecated, but still applied
	// if it had already been assigned, for the sake of backward-compatibility.
	// A title will no longer be assigned for new or updated button block links.

	const wrapperClasses = classnames( className, {
		[ `has-custom-width wp-block-button__width-${ width }` ]: width,
	} );

	return (
		text && (
			<div { ...useBlockProps.save( { className: wrapperClasses } ) }>
				<RichText.Content
					tagName="a"
					className={ buttonClasses }
					href={ url }
					title={ title }
					style={ buttonStyle }
					value={ text }
					target={ linkTarget }
					rel={ rel }
				/>
			</div>
		)
	);
}
