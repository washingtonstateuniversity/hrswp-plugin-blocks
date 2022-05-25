/**
 * External dependencies
 */
import { times } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { three, five, many } from './icons';

const variations = [
	{
		name: 'three-panels',
		title: __( 'Three' ),
		description: __( 'Three accordion panels' ),
		icon: three,
		innerBlocks: [
			[ 'hrswp/accordion-section' ],
			[ 'hrswp/accordion-section' ],
			[ 'hrswp/accordion-section' ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'five-panels',
		title: __( 'Five' ),
		description: __( 'Five accordion panels' ),
		icon: five,
		isDefault: true,
		innerBlocks: [
			[ 'hrswp/accordion-section' ],
			[ 'hrswp/accordion-section' ],
			[ 'hrswp/accordion-section' ],
			[ 'hrswp/accordion-section' ],
			[ 'hrswp/accordion-section' ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'ten-panels',
		title: __( 'Ten' ),
		description: __( 'Ten accordion panels' ),
		icon: many,
		innerBlocks: times( 10, () => [ 'hrswp/accordion-section' ] ),
		scope: [ 'block' ],
	},
	{
		name: 'fifteen-panels',
		title: __( 'Fifteen' ),
		description: __( 'Fifteen accordion panels' ),
		icon: many,
		innerBlocks: times( 15, () => [ 'hrswp/accordion-section' ] ),
		scope: [ 'block' ],
	},
	{
		name: 'twenty-panels',
		title: __( 'Twenty' ),
		description: __( 'Twenty accordion panels' ),
		icon: many,
		innerBlocks: times( 20, () => [ 'hrswp/accordion-section' ] ),
		scope: [ 'block' ],
	},
	{
		name: 'twenty-five-panels',
		title: __( 'Twenty-five' ),
		description: __( 'Twenty-five accordion panels' ),
		icon: many,
		innerBlocks: times( 25, () => [ 'hrswp/accordion-section' ] ),
		scope: [ 'block' ],
	},
];

export default variations;
