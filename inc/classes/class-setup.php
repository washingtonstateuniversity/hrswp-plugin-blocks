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
	 * The plugin blocks to register.
	 *
	 * @since 0.3.0
	 * @var array Array of blocks to register in the format 'registered/block-name' => 'render-file.php' or 0.
	 */
	public static $blocks = array();

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
			$instance->define_blocks();
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
		add_action( 'admin_init', array( $this, 'manage_plugin_status' ) );

		// Registers scripts and styles to load on the backend only.
		add_action( 'admin_enqueue_scripts', array( $this, 'action_register_editor_assets' ) );

		// Registers scripts and styles to load on the frontend only.
		add_action( 'wp_enqueue_scripts', array( $this, 'action_register_frontend_assets' ) );

		// Registers scripts and styles to load on both the frontend and backend.
		add_action( 'enqueue_block_assets', array( $this, 'action_register_assets' ) );
	}

	/**
	 * Defines an array of blocks to register.
	 *
	 * @since 0.3.0
	 */
	private function define_blocks() {
		self::$blocks = array(
			'hrswp/accordion-heading' => 0,
			'hrswp/accordion-section' => 0,
			'hrswp/accordions'        => 0,
			'hrswp/button'            => 0,
			'hrswp/buttons'           => 0,
			'hrswp/posts-list'        => 'posts-list.php',
			'hrswp/filter'            => 0,
			'hrswp/filter-section'    => 0,
			'hrswp/callout'           => 0,
			'hrswp/notification'      => 0,
			'hrswp/sidebar'           => 0,
		);
	}

	/**
	 * Manages the plugin status.
	 *
	 * Checks on the plugin status to watch for updates and activation and calls
	 * additional actions as needed.
	 *
	 * @since 0.1.0
	 */
	public function manage_plugin_status() {
		if ( ! is_admin() || ! function_exists( 'get_plugin_data' ) ) {
			return;
		}

		$status = get_option( self::$slug . '_plugin-status' );
		$plugin = get_plugin_data( self::$basename );

		// Exit early if either version number is missing.
		if ( ! isset( $status['version'] ) || ! isset( $plugin['Version'] ) ) {
			return;
		}

		// Update the version if just activated or the versions don't match.
		if ( 'activated' === $status['status'] || $status['version'] !== $plugin['Version'] ) {
			$status = array(
				'status'  => 'active',
				'version' => $plugin['Version'],
			);

			update_option( self::$slug . '_plugin-status', $status );
		}
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
		$asset_file = include plugin_dir_path( dirname( __DIR__ ) ) . 'build/index.asset.php';

		// Only load the filter scripts when they are needed.
		if ( has_block( 'hrswp/filter' ) ) {
			wp_register_script(
				'mark-js',
				plugins_url( 'build/lib/mark.min.js', self::$basename ),
				array(),
				$asset_file['version'],
				true
			);

			wp_enqueue_script(
				self::$slug . '-filter',
				plugins_url( 'build/filter.js', self::$basename ),
				array( 'mark-js' ),
				$asset_file['version'],
				true
			);
		}

		// Only load the accordion scripts when they are needed.
		if ( has_block( 'hrswp/accordions' ) ) {
			wp_enqueue_script(
				self::$slug . '-accordion',
				plugins_url( 'build/accordion.js', self::$basename ),
				array(),
				$asset_file['version'],
				true
			);
		}
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
