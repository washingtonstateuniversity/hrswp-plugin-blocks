/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { RichText, useBlockProps } = wp.blockEditor;

export default function save( { attributes } ) {
	const { content, level } = attributes;
	const TagName = 'h' + level;

	const className = 'hrswp-accordion-heading';

	return (
		<TagName { ...useBlockProps.save( { className } ) }>
			<RichText.Content value={ content } />
		</TagName>
	);
}
