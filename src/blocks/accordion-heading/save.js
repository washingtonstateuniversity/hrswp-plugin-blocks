/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

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
