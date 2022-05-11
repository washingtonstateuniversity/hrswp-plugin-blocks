/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText, useBlockProps } = wp.blockEditor;

function HeadingEdit({ attributes, setAttributes, onReplace, mergedStyle }) {
	const { content, level, placeholder } = attributes;
	const tagName = 'h' + level;
	const blockProps = useBlockProps({
		style: mergedStyle,
	});

	return (
		<>
			<RichText
				identifier="content"
				allowedFormats={[]}
				tagName={tagName}
				className={'hrswp-accordion-heading'}
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				onReplace={onReplace}
				onRemove={() => onReplace([])}
				aria-label={__('Heading text')}
				placeholder={placeholder || __('Brief panel heading…')}
				{...blockProps}
			/>
		</>
	);
}

export default HeadingEdit;
