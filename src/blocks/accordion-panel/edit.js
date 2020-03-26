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
		'core/heading',
		{ allowedFormats: [], placeholder: __( 'Brief panel heading…' ) },
	],
	[ 'core/column', { className: false } ],
];

function AccordionPanelEdit() {
	return (
		<>
			<InnerBlocks
				templateLock="insert"
				template={ TEMPLATE }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
			/>
		</>
	);
}

export default AccordionPanelEdit;
