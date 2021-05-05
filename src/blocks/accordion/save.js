/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks, RichText, useBlockProps } = wp.blockEditor;

export default function save( { attributes } ) {
	const {
		headingContent,
		elementId,
		headingLevel,
	} = attributes;

	const tagName = 'h' + headingLevel;

	// const panelClasses = classnames( className, {
	// 	'accordion-panel-heading': true,
	// } );

	const wrapperClasses = 'hrswp-block-accordion';

	return (
		<>
			{/* <RichText.Content
				tagName={ tagName }
				className={ 'accordion-panel-heading' }
				value={ headingContent }
			/> */}
			<div { ...useBlockProps.save( { className: wrapperClasses } ) }>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
