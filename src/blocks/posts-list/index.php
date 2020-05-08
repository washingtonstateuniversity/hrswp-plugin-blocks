<?php
/**
 * Server-side rendering of the `hrswp/posts-list` block.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\posts_list;

function render( $attributes ) {
	// Coming soon.
	var_dump( $attributes ); // DEBUG
}

/**
 * Registers the `hrswp/posts-list` block on the server.
 */
function register() {
	register_block_type_from_metadata(
		__DIR__ . '/posts-list',
		array(
			'render_callback' => __NAMESPACE__ . '\render',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register', 25 );
