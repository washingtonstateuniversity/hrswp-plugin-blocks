/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

/**
 * The block template.
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

export default function CalloutEdit() {
	const blocksProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blocksProps, {
		template: TEMPLATE,
	} );

	return <div { ...innerBlocksProps } />;
}
