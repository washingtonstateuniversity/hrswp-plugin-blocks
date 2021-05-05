/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const {
	AlignmentToolbar,
	BlockControls,
	RichText,
	useBlockProps,
} = wp.blockEditor;
const { ToolbarGroup } = wp.components;

/**
 * Internal dependencies
 */
import HeadingLevelDropdown from './heading-level-dropdown';

function HeadingEdit( {
	attributes,
	setAttributes,
	mergeBlocks,
	onReplace,
	mergedStyle,
	clientId,
} ) {
	const { content, level, placeholder } = attributes;
	const tagName = 'h' + level;
	const blockProps = useBlockProps( {
		style: mergedStyle,
	} );

	return (
		<>
			{ /* <BlockControls>
				<ToolbarGroup>
					<HeadingLevelDropdown
						selectedLevel={ level }
						onChange={ ( newLevel ) =>
							setAttributes( { level: newLevel } )
						}
					/>
				</ToolbarGroup>
			</BlockControls> */ }
			<RichText
				identifier="content"
				allowedFormats={ [] }
				tagName={ tagName }
				className={ 'hrswp-accordion-heading' }
				value={ content }
				onChange={ ( value ) => setAttributes( { content: value } ) }
				onReplace={ onReplace }
				onRemove={ () => onReplace( [] ) }
				aria-label={ __( 'Heading text' ) }
				placeholder={ placeholder || __( 'Brief panel heading…' ) }
				{ ...blockProps }
			/>
		</>
	);
}

export default HeadingEdit;
