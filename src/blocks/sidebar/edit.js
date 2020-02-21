/**
 * External dependencies.
 */
import classnames from 'classnames';

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
	[ 'core/column', { placeholder: __( 'Enter the main content…' ) } ],
	[ 'core/column', { placeholder: __( 'Enter the sidebar content…' ) } ],
];

/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'core/column' ];

function SidebarEdit( { className } ) {
	const classes = classnames( className, { 'wp-block-columns': true } );

	return (
		<>
			<div className={ classes }>
				<InnerBlocks
					template={ TEMPLATE }
					templateLock="all"
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</div>
		</>
	);
}

export default SidebarEdit;
