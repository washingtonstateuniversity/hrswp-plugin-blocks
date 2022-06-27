<?php
/**
 * HRSWP Blocks Setup: Setup class
 *
 * @package HRSWP_Blocks
 * @since 0.1.0
 */

namespace HRSWP\Blocks\Setup;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The HRSWP Blocks setup class.
 *
 * @since 0.1.0
 */
class Setup {
	/**
	 * The plugin slug.
	 *
	 * @since 0.1.0
	 * @var string
	 */
	public static $slug = 'hrswp_blocks';

	/**
	 * The plugin file basename.
	 *
	 * @since 0.1.0
	 * @var string
	 */
	public static $basename;

	/**
	 * Instantiates plugin Setup singleton.
	 *
	 * @since 0.1.0
	 *
	 * @param string $file The __FILE__ value of the main plugin file.
	 * @return Setup An instance of the HRSWP Blocks Setup class.
	 */
	public static function get_instance( $file ) {
		static $instance;

		if ( ! isset( $instance ) ) {
			$instance       = new Setup();
			self::$basename = $file;

			$instance->setup_hooks();
		}

		return $instance;
	}

	/**
	 * An empty constructor to prevent plugin being loaded more than once.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		/* Nothing doing. */
	}

	/**
	 * Loads the WP API actions and hooks.
	 *
	 * @since 0.1.0
	 *
	 * @access private
	 */
	private function setup_hooks() {
		// Registers scripts and styles to load on the backend only.
		add_action( 'admin_enqueue_scripts', array( $this, 'action_register_editor_assets' ) );

		// Registers scripts and styles to load on the frontend only.
		add_action( 'wp_enqueue_scripts', array( $this, 'action_register_frontend_assets' ) );

		// Registers scripts and styles to load on both the frontend and backend.
		add_action( 'enqueue_block_assets', array( $this, 'action_register_assets' ) );
	}

	/**
	 * Registers the plugin editor scripts and styles.
	 *
	 * @since 0.2.0
	 * @since 3.0.0 Switch from enqueue to register to use `block.json`
	 * @return void
	 */
	public function action_register_editor_assets() {
		$asset_file = include plugin_dir_path( dirname( __DIR__ ) ) . 'build/index.asset.php';

		wp_register_script(
			self::$slug . '_script',
			plugins_url( 'build/index.js', dirname( __DIR__ ) ),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		wp_register_style(
			self::$slug . '_editor_style',
			plugins_url( 'build/index.css', dirname( __DIR__ ) ),
			array(),
			$asset_file['version']
		);
	}

	/**
	 * Registers scripts and styles to load on the frontend only.
	 *
	 * @since 3.0.0
	 * @return void
	 */
	public function action_register_frontend_assets() {
		$filter_asset_file    = include plugin_dir_path( dirname( __DIR__ ) ) . 'build/filter.asset.php';
		$accordion_asset_file = include plugin_dir_path( dirname( __DIR__ ) ) . 'build/accordion.asset.php';

		wp_register_script(
			self::$slug . '_filter_view',
			plugins_url( 'build/filter.js', dirname( __DIR__ ) ),
			$filter_asset_file['dependencies'],
			$filter_asset_file['version'],
			true
		);

		wp_register_script(
			self::$slug . '_accordion_view',
			plugins_url( 'build/accordion.js', dirname( __DIR__ ) ),
			$accordion_asset_file['dependencies'],
			$accordion_asset_file['version'],
			true
		);
	}

	/**
	 * Registers scripts and styles to load on both the frontend and backend.
	 *
	 * @since 0.2.0
	 * @since 3.0.0 Switch from enqueue to register to use `block.json`
	 * @return void
	 */
	public function action_register_assets() {
		$asset_file = include plugin_dir_path( dirname( __DIR__ ) ) . 'build/index.asset.php';

		wp_register_style(
			self::$slug . '_style',
			plugins_url( 'build/style-index.css', self::$basename ),
			array(),
			$asset_file['version']
		);
	}
}
