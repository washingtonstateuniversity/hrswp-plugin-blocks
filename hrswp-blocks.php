<?php
/**
 * Plugin Name: HRSWP Blocks
 * Version: 3.1.0-rc.1
 * Description: A WSU HRS WordPress plugin to provide custom blocks and WP block editor adjustments.
 * Author: Adam Turner, washingtonstateuniversity
 * Author URI: https://hrs.wsu.edu/
 * Plugin URI: https://github.com/washingtonstateuniversity/hrswp-plugin-blocks
 * Update URI: https://api.github.com/repos/washingtonstateuniversity/hrswp-plugin-blocks/releases/latest
 * Text Domain: hrswp-blocks
 * Requires at least: 5.9
 * Tested up to: 6.0.0
 * Requires PHP: 7.3
 *
 * @package HRSWP_Blocks
 * @since 0.1.0
 */

namespace HRSWP\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Activates the plugin.
 *
 * @since 0.1.0
 */
register_activation_hook(
	__FILE__,
	function(): void {
		// Delete legacy option.
		delete_option( 'hrswp_blocks_plugin-status' );

		// Initialize plugin options.
		add_option( 'hrswp_plugins_protected_ids' );
	}
);

// Load blocks.
require_once dirname( __FILE__ ) . '/inc/blocks.php';

// Load the asset loader.
require_once dirname( __FILE__ ) . '/inc/asset-loader.php';

// Load the plugin settings.
require_once dirname( __FILE__ ) . '/inc/settings.php';

/**
 * Uninstalls the plugin.
 *
 * @since 0.1.0
 */
function uninstall(): void {
	if ( ! current_user_can( 'activate_plugins' ) ) {
		return;
	}

	// Delete options.
	delete_option( 'hrswp_blocks_plugin-status' );
	delete_option( 'hrswp_plugins_protected_ids' );
}
register_uninstall_hook( __FILE__, __NAMESPACE__ . '\uninstall' );
