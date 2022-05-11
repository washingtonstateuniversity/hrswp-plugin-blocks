/**
 * External dependencies.
 */
import classnames from 'classnames';
import { dropRight, times } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { withDispatch } from '@wordpress/data';
import { PanelBody, ToggleControl } from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['core/paragraph', 'hrswp/button'];

/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */
const TEMPLATE = [
	['core/paragraph', { placeholder: __('Write message…') }],
	['hrswp/button'],
];

function NotificationEditContainer({ className, attributes, updateBlocks }) {
	const { showActionButton } = attributes;

	const wrapperClasses = classnames(className, {
		'has-action-button': showActionButton,
	});
	const blockProps = useBlockProps({ className: wrapperClasses });
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
		templateLock: "insert",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Action Button Settings')}>
					<ToggleControl
						label={__('Show Action Button')}
						checked={!!showActionButton}
						onChange={(value) => updateBlocks(value)}
						help={
							showActionButton
								? __(
										'Use the action button to call users to action.'
								  )
								: __('Toggle to include an action button.')
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps} />
		</>
	);
}

const NotificationEdit = withDispatch((dispatch, ownProps, registry) => ({
	updateBlocks(showActionButton) {
		const { clientId, setAttributes } = ownProps;
		const { replaceInnerBlocks } = dispatch('core/block-editor');
		const { getBlocks } = registry.select('core/block-editor');

		let innerBlocks = getBlocks(clientId);

		// Set the block's own attribute.
		setAttributes({ showActionButton });

		if (true === showActionButton) {
			// Add the action button.
			innerBlocks = [
				...innerBlocks,
				...times(1, () => {
					return createBlock('hrswp/button');
				}),
			];
		} else {
			// Remove the action button.
			innerBlocks = dropRight(innerBlocks, 1);
		}

		replaceInnerBlocks(clientId, innerBlocks, false);
	},
}))(NotificationEditContainer);

export default NotificationEdit;
