/**
 * WordPress dependencies
 */
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
				id={ `${ elementId }-label` }
			/>
			<input
				aria-labelledby={ `${ elementId }-label` }
				className="wp-block-search__input"
				type="search"
				name="search_form_input"
				id={ elementId }
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
