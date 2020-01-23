/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;
const { Disabled } = wp.components;
const { withInstanceId } = wp.compose;

function SearchFilterInputEdit( {
	attributes,
	setAttributes,
	className,
	instanceId,
} ) {
	const { label, buttonText, elementId } = attributes;

	setAttributes( { elementId: `search-form-${ instanceId }` } );

	return (
		<div className={ className }>
			<RichText
				tagName="label"
				className="wp-block-search__label"
				aria-label={ __( 'Label text' ) }
				placeholder={ __( 'Add label…' ) }
				withoutInteractiveFormatting
				allowedFormats={ [] }
				value={ label }
				onChange={ ( value ) => setAttributes( { label: value } ) }
				htmlFor={ elementId }
				id={ `${ elementId }-label` }
			/>
			<Disabled>
				<input
					aria-labelledby={ `${ elementId }-label` }
					className="wp-block-search__input"
					type="search"
					name="search_form_input"
					id={ elementId }
				/>
			</Disabled>
			<div className="wp-block-button is-style-small">
				<RichText
					tagName="button"
					className={ `wp-block-button__link ${ elementId }-reset` }
					aria-label={ __( 'Reset search results.' ) }
					placeholder={ __( 'Add button text…' ) }
					withoutInteractiveFormatting
					allowedFormats={ [] }
					value={ buttonText }
					onChange={ ( html ) => setAttributes( { buttonText: html } ) }
				/>
			</div>
		</div>
	);
}

export default withInstanceId( SearchFilterInputEdit );
