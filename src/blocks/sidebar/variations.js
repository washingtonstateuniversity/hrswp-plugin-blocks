/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { sidebarRight, sidebarLeft } from './icons';

const variations = [
	{
		name: 'sidebar-right',
		title: __( 'Sidebar right' ),
		icon: sidebarRight,
		innerBlocks: [ [ 'core/column' ], [ 'core/column' ] ],
		scope: [ 'block' ],
	},
	{
		name: 'sidebar-left',
		title: __( 'Sidebar left' ),
		icon: sidebarLeft,
		innerBlocks: [ [ 'core/column' ], [ 'core/column' ] ],
		scope: [ 'block' ],
	},
];

export default variations;
