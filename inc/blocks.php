<?php
/**
 * Used to set up all blocks used with the block editor.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Include files required for dynamic block registration.
require plugin_dir_path( dirname( __FILE__ ) ) . 'build/blocks/posts-list/index.php';
require plugin_dir_path( dirname( __FILE__ ) ) . 'build/blocks/list-awards/index.php';

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
		);
		foreach ( $block_folders as $block_folder ) {
			register_block_type(
				plugin_dir_path( dirname( __FILE__ ) ) . 'build/blocks/' . $block_folder
			);
		}
	}
);

/**
 * Adds a custom block category for the plugin blocks.
 *
 * Callback function for the `block_categories` WP filter hook.
 *
 * @since 3.2.0
 *
 * @param array $default_categories Array of default block categories.
 * @return array Array of block categories.
 */
add_filter(
	'block_categories_all',
	function( array $default_categories ): array {
		$plugin_categories = array(
			array(
				'slug'  => 'hrswp-blocks-external',
				'title' => __( 'HRS External Content', 'hrswp-blocks' ),
			),
		);
		return wp_parse_args( $plugin_categories, $default_categories );
	},
	10,
	1
);
