/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { Disabled, PanelBody } = wp.components;
const { withDispatch } = wp.data;

/**
 * Internal dependencies
 */
import AccordionHeadingToolbar from './heading-toolbar';

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In accordion block, the only block we allow is 'hrswp/accordion-panel'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'hrswp/accordion-panel' ];

/**
 * The block template.
 *
 * By default the block is populated with five accordion panels.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
	[ 'hrswp/accordion-panel' ],
];

function AccordionEditContent( { attributes, className, updateHeadingLevel } ) {
	const { level } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Heading level' ) }>
					<AccordionHeadingToolbar
						isCollapsed={ false }
						minLevel={ 1 }
						maxLevel={ 7 }
						selectedLevel={ level }
						onChange={ ( newLevel ) =>
							updateHeadingLevel( newLevel )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className } data-accordion-block>
				<Disabled>
					<div className="wp-block-buttons controls">
						<div className="wp-block-button is-style-outline">
							<button
								id="open-all-panels"
								className="wp-block-button__link"
							>
								Open all
							</button>
						</div>
						<div className="wp-block-button is-style-outline">
							<button
								id="close-all-panels"
								className="wp-block-button__link"
							>
								Close All
							</button>
						</div>
					</div>
				</Disabled>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					templateLock={ false }
					template={ TEMPLATE }
				/>
			</div>
		</>
	);
}

const AccordionEdit = withDispatch( ( dispatch, ownProps, registry ) => ( {
	/**
	 * Update all child Accordion Panel blocks with a new heading
	 * level setting based on whatever heading level is passed in.
	 * This allows a change to the parent to propogate to all
	 * child blocks and override anything set on an individual
	 * panel.
	 *
	 * @param {number} newLevel the heading level setting
	 */
	updateHeadingLevel( newLevel ) {
	const { clientId, setAttributes } = ownProps;
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		const { getBlockOrder } = registry.select( 'core/block-editor' );

		// Update own level setting.
setAttributes( { level: newLevel } );

		// Update child block to match own level setting.
		const innerBlockClientIds = getBlockOrder( clientId );
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, {
				level: newLevel,
			} );
		} );
	},
} ) )( AccordionEditContent )

export default AccordionEdit;
