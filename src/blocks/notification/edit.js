/**
 * External dependencies.
 */
import classnames from 'classnames';
import { dropRight, times } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { withDispatch } = wp.data;
const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor;

/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/button' ];

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	[ 'core/paragraph', { placeholder: __( 'Write message…' ) } ],
	[ 'core/button' ],
];

function NotificationEditContainer( { className, attributes, updateBlocks } ) {
	const { showActionButton } = attributes;

	const classes = classnames( className, {
		'has-action-button': showActionButton,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Action Button Settings' ) }>
					<ToggleControl
						label={ __( 'Show Action Button' ) }
						checked={ !! showActionButton }
						onChange={ ( value ) => updateBlocks( value ) }
						help={
							showActionButton
								? __(
										'Use the action button to call users to action.'
								  )
								: __( 'Toggle to include an action button.' )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ classes }>
				<InnerBlocks
					templateLock="insert"
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
				/>
			</div>
		</>
	);
}

const NotificationEdit = withDispatch( ( dispatch, ownProps, registry ) => ( {
	updateBlocks( showActionButton ) {
		const { clientId, setAttributes } = ownProps;
		const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
		const { getBlocks } = registry.select( 'core/block-editor' );

		let innerBlocks = getBlocks( clientId );

		// Set the block's own attribute.
		setAttributes( { showActionButton } );

		if ( true === showActionButton ) {
			// Add the action button.
			innerBlocks = [
				...innerBlocks,
				...times( 1, () => {
					return createBlock( 'core/button' );
				} ),
			];
		} else {
			// Remove the action button.
			innerBlocks = dropRight( innerBlocks, 1 );
		}

		replaceInnerBlocks( clientId, innerBlocks, false );
	},
} ) )( NotificationEditContainer );

export default NotificationEdit;
