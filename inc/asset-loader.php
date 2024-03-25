<?php
/**
 * Loads plugin script and style assets.
 *
 * @package HRSWP_Blocks
 * @since 0.1.0
 * @since 3.1.0 Convert from class to functions.
 */

namespace HRSWP\Blocks\AssetLoader;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the plugin editor scripts and styles.
 *
 * @since 0.2.0
 * @since 3.0.0 Switch from enqueue to register to use `block.json`
 *
 * @return void
 */
function action_register_editor_assets(): void {
	$asset_file = include plugin_dir_path( __DIR__ ) . 'build/index.asset.php';

	wp_register_script(
		'hrswp-blocks-script',
		plugins_url( 'build/index.js', __DIR__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_register_style(
		'hrswp-blocks-editor-style',
		plugins_url( 'build/index.css', __DIR__ ),
		array(),
		$asset_file['version']
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\action_register_editor_assets' );

/**
 * Registers scripts and styles to load on the frontend only.
 *
 * @since 3.0.0
 *
 * @return void
 */
function action_register_frontend_assets(): void {
	$filter_asset_file    = include plugin_dir_path( __DIR__ ) . 'build/filter.asset.php';
	$accordion_asset_file = include plugin_dir_path( __DIR__ ) . 'build/accordion.asset.php';

	wp_register_script(
		'hrswp-blocks-filter-view',
		plugins_url( 'build/filter.js', __DIR__ ),
		$filter_asset_file['dependencies'],
		$filter_asset_file['version'],
		true
	);

	wp_register_script(
		'hrswp-blocks-accordion-view',
		plugins_url( 'build/accordion.js', __DIR__ ),
		$accordion_asset_file['dependencies'],
		$accordion_asset_file['version'],
		true
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\action_register_frontend_assets' );

/**
 * Registers scripts and styles to load on both the frontend and backend.
 *
 * @since 0.2.0
 * @since 3.0.0 Switch from enqueue to register to use `block.json`
 *
 * @return void
 */
function action_register_assets(): void {
	$asset_file = include plugin_dir_path( __DIR__ ) . 'build/index.asset.php';

	wp_register_style(
		'hrswp-blocks-style',
		plugins_url( 'build/style-index.css', __DIR__ ),
		array(),
		$asset_file['version']
	);
}
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\action_register_assets' );

/**
 * Hides publication controls from non-admin users for select pages.
 *
 * This pulls the list of IDs to protect from the plugin settings.
 *
 * @since 3.1.0
 *
 * @see wp_add_inline_style
 * @return void
 */
function action_hide_publication_controls(): void {
	global $post;

	if ( 'publish' !== $post->post_status || current_user_can( 'manage_options' ) ) {
		return;
	}

	$protected_page_ids = get_option( 'hrswp_plugins_protected_ids' );
	if ( ! $protected_page_ids ) {
		return;
	}

	$protected_page_ids = explode( "\n", $protected_page_ids );
	$protected_page_ids = array_map( 'trim', $protected_page_ids );
	$protected_page_ids = array_map( 'intval', $protected_page_ids );

	if ( in_array( (int) $post->ID, $protected_page_ids, true ) ) {
		wp_add_inline_style(
			'hrswp-editor-style',
			'.editor-post-switch-to-draft{display:none}'
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\action_hide_publication_controls', 30 );
