<?php
/**
 * Plugin Name: HRSWP Blocks
 * Version: 0.5.0
 * Description: A WSU HRS WordPress plugin to provide custom blocks and WP block editor adjustments.
 * Author: Adam Turner, washingtonstateuniversity
 * Author URI: https://hrs.wsu.edu/
 * Plugin URI: https://github.com/washingtonstateuniversity/hrswp-plugin-blocks
 * Text Domain: hrswp-blocks
 * Requires at least: 5.0
 * Tested up to: 5.4.0
 * Requires PHP: 7.0
 *
 * @package HRSWP_Blocks
 * @since 0.1.0
 */

namespace HRSWP\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Loads the core plugin Setup class.
 *
 * @since 0.1.0
 */
require __DIR__ . '/includes/class-setup.php';

// Starts things up.
add_action( 'plugins_loaded', __NAMESPACE__ . '\load' );

register_activation_hook( __FILE__, array( __NAMESPACE__ . '\Setup', 'activate' ) );
register_deactivation_hook( __FILE__, array( __NAMESPACE__ . '\Setup', 'deactivate' ) );
register_uninstall_hook( __FILE__, array( __NAMESPACE__ . '\Setup', 'uninstall' ) );

/**
 * Creates an instance of the Setup class.
 *
 * @since 0.1.0
 *
 * @return Setup An instance of the Setup class.
 */
function load() {
	$hrswp_blocks = Setup::get_instance( __FILE__ );

	return $hrswp_blocks;
}
