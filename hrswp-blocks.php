<?php
/**
 * Plugin Name: HRSWP Blocks
 * Version: 3.4.0
 * Description: A WSU HRS WordPress plugin to provide custom blocks and WP block editor adjustments.
 * Author: Adam Turner, washingtonstateuniversity
 * Author URI: https://hrs.wsu.edu/
 * Plugin URI: https://github.com/washingtonstateuniversity/hrswp-plugin-blocks
 * Update URI: https://api.github.com/repos/washingtonstateuniversity/hrswp-plugin-blocks/releases/latest
 * Text Domain: hrswp-blocks
 * Requires at least: 5.9
 * Tested up to: 6.1.1
 * Requires PHP: 7.4
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

// Load blocks, asset loader, settinsg, and REST API.
require_once dirname( __FILE__ ) . '/inc/blocks.php';
require_once dirname( __FILE__ ) . '/inc/asset-loader.php';
require_once dirname( __FILE__ ) . '/inc/settings.php';
require_once dirname( __FILE__ ) . '/inc/api.php';
require_once dirname( __FILE__ ) . '/inc/query.php';

// Load plugin classes.
require_once dirname( __FILE__ ) . '/inc/classes/class-sideload-image.php';

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

/**
 * Verifies plugin dependencies.
 *
 * @since 3.2.0
 *
 * @return bool True if dependencies are met, false if not.
 */
function verify_plugin_dependencies(): bool {
	return in_array(
		'hrswp-plugin-sqlsrv-db/hrswp-sqlsrv-db.php',
		apply_filters( 'active_plugins', get_option( 'active_plugins' ) ),
		true
	);
}

add_action(
	'plugins_loaded',
	function(): void {
		if ( ! verify_plugin_dependencies() ) {
			add_action(
				'admin_notices',
				function(): void {
					printf(
						'<div class="error"><p>%s</p></div>',
						esc_html__( 'The HRSWP Blocks plugin requires the HRSWP Sqlsrv DB plugin to function properly. Please install before continuing.', 'hrswp-blocks' )
					);
				}
			);
		}
	}
);
