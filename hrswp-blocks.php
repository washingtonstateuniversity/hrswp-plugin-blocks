<?php
/**
 * Plugin Name: HRSWP Blocks
 * Version: 3.0.0-rc.1
 * Description: A WSU HRS WordPress plugin to provide custom blocks and WP block editor adjustments.
 * Author: Adam Turner, washingtonstateuniversity
 * Author URI: https://hrs.wsu.edu/
 * Plugin URI: https://github.com/washingtonstateuniversity/hrswp-plugin-blocks
 * Update URI: https://api.github.com/repos/washingtonstateuniversity/hrswp-plugin-blocks/releases/latest
 * Text Domain: hrswp-blocks
 * Requires at least: 5.9
 * Tested up to: 5.9.2
 * Requires PHP: 7.3
 *
 * @package HRSWP_Blocks
 * @since 0.1.0
 */

namespace HRSWP\Blocks;

use HRSWP\Blocks\Setup;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Load blocks.
require_once dirname( __FILE__ ) . '/inc/blocks.php';

// Load core Setup class.
require_once dirname( __FILE__ ) . '/inc/classes/class-setup.php';

/**
 * Creates an instance of the Setup class.
 *
 * @since 0.1.0
 *
 * @return Setup An instance of the Setup class.
 */
add_action(
	'plugins_loaded',
	function() {
		$hrswp_blocks = Setup\Setup::get_instance( __FILE__ );
		return $hrswp_blocks;
	}
);

register_activation_hook( __FILE__, __NAMESPACE__ . '\activate' );
register_deactivation_hook( __FILE__, __NAMESPACE__ . '\deactivate' );
register_uninstall_hook( __FILE__, __NAMESPACE__ . '\uninstall' );

/**
 * Activates the plugin.
 *
 * @since 0.1.0
 */
function activate() {
	/**
	 * Track activation with an option because the activation hook fires
	 * before the plugin is actually set up, which prevents taking certain
	 * actions in this method.
	 *
	 * @link https://stackoverflow.com/questions/7738953/is-there-a-way-to-determine-if-a-wordpress-plugin-is-just-installed/13927297#13927297
	 */
	$options = get_option( 'hrswp_blocks_plugin-status' );
	if ( ! $options ) {
		add_option(
			'hrswp_blocks_plugin-status',
			array(
				'status'  => 'activated',
				'version' => '0.0.0',
			)
		);
	} else {
		$options['status'] = 'activated';
		update_option( 'hrswp_blocks_plugin-status', $options );
	}
}

/**
 * Deactivates the plugin.
 *
 * @since 0.1.0
 */
function deactivate() {
	// Set plugin status to 'deactivated'.
	$options           = get_option( 'hrswp_blocks_plugin-status' );
	$options['status'] = 'deactivated';

	update_option( 'hrswp_blocks_plugin-status', $options );
}

/**
 * Uninstalls the plugin.
 *
 * @since 0.1.0
 */
function uninstall() {
	if ( ! current_user_can( 'activate_plugins' ) ) {
		return;
	}

	// Delete plugin options.
	delete_option( 'hrswp_blocks_plugin-status' );
}
