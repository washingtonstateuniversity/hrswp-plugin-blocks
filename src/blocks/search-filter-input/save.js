/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;

export default function save( { attributes, className } ) {
	const { label, buttonText, elementId } = attributes;

	return (
		<div className={ className }>
			<RichText.Content
				tagName="label"
				className="wp-block-search__label"
				value={ label }
				htmlFor={ elementId }
			/>
			<input
				className="wp-block-search__input"
				aria-label={ __( 'Optional placeholder text' ) }
				type="search"
				name="search_form_input"
				id={ elementId }
				data-search-type=""
			/>
			<div className="wp-block-button is-style-small">
				<RichText.Content
					tagName="button"
					className={ `wp-block-button__link ${ elementId }-reset` }
					value={ buttonText }
				/>
			</div>
		</div>
	);
}
