<?php
/**
 * HRSWP Allowed Blocks
 *
 * @package HRSWP_Blocks
 * @since 0.7.0
 */

namespace HRSWP\Blocks\Blocks;
use HRSWP\Blocks\Setup;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Filters the blocks shown in the editor block inserter.
 *
 * @since 0.7.0
 *
 * @param bool|array $allowed_block_types Array of block type slugs, or boolean to enable/disable all.
 * @return bool|array Array of allowed block type slugs, or boolean to enable/disable all.
 */
function allowed_block_types_filter( $allowed_block_types ) {
	// Get all registered blocks and the HRSWP blocks.
	$blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
	$hrs_blocks = Setup\Setup::get_all_registered();

	// The blocks to hide.
	$blocked_blocks = array(
		'core/button',
		'core/buttons',
	);

	$allowed_blocks = array();
	foreach ( $blocks as $block ) {
		if ( ! in_array( $block->name, $blocked_blocks, true ) ) {
			$allowed_blocks[] = $block->name;
		}
	}

	return wp_parse_args( $hrs_blocks, $allowed_blocks );
}
add_filter( 'allowed_block_types', __NAMESPACE__ . '\allowed_block_types_filter', 10, 1 );
