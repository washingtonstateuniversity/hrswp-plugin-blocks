/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

/**
 * The block template.
 *
 * This is locked so that the search input field is always first, followed
 * by a search filter section to contain the content to be searched.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	[
		'core/paragraph',
		{ fontSize: 'large', placeholder: __( 'Callout title…' ) },
	],
	[
		'core/paragraph',
		{ placeholder: __( 'Enter the callout message or replace…' ) },
	],
];

export default function edit( { className } ) {
	return (
		<>
			<div className={ className }>
				<InnerBlocks template={ TEMPLATE } />
			</div>
		</>
	);
}
