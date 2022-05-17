<?php
/**
 * Used to set up all HRSWP ER blocks used with the block editor.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Include files required for dynamic block registration.
require plugin_dir_path( dirname( __FILE__ ) ) . 'build/blocks/posts-list/index.php';

/**
* Registers HRSWP blocks.
*
* @since 1.0.0
*
* @see register_block_type
* @return void
*/
add_action(
	'init',
	function(): void {
		$block_folders = array(
			'accordion-heading',
			'accordion-section',
			'accordions',
			'button',
			'buttons',
			'callout',
			'filter',
			'filter-section',
			'notification',
			'sidebar',
			'spacer',
		);
		foreach ( $block_folders as $block_folder ) {
			register_block_type(
				plugin_dir_path( dirname( __FILE__ ) ) . 'build/blocks/' . $block_folder
			);
		}
	}
);
