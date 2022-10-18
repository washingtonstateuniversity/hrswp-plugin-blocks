<?php
/**
 * Manages the plugin settings.
 *
 * @package HRSWP_Blocks
 * @since 3.1.0
 */

namespace HRSWP\Blocks\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Displays the protected IDs settings field html.
 *
 * @since 3.1.0
 *
 * @return void
 */
function settings_field_protected_ids(): void {
	printf(
		'<fieldset><legend class="screen-reader-text"><span>%1$s</span></legend><p><label for="%2$s">%4$s</label></p><textarea name="%2$s" id="%2$s" class="large-text" rows="5">%3$s</textarea></fieldset>',
		esc_html__( 'Protected page and post IDs', 'hrswp-blocks' ),
		esc_attr( 'hrswp_plugins_protected_ids' ),
		esc_textarea( get_option( 'hrswp_plugins_protected_ids' ) ),
		esc_html__(
			'Enter the IDs of pages or posts you would like to protect
			from accidentally being reverted to draft by non-admin users.
			Separate multiple IDs with line breaks.',
			'hrswp-blocks'
		)
	);
}

/**
 * Sanitizes an option value that expects a string of positive integers.
 *
 * This option expects a string of positive integers separated by newlines
 * (`\n`). It will strip out any other characters from each line.
 *
 * @since 3.1.0
 *
 * @param string $value The unsanitized value.
 * @return string The sanitized value.
 */
function sanitize_setting_int_list( string $value ): string {
	$value = explode( "\n", $value );
	$value = array_filter( array_map( 'trim', $value ) );
	$value = array_filter(
		array_map(
			function( string $number ): string {
				$number = preg_replace( '/[^\-0-9]/', '', wp_specialchars_decode( $number ) );
				$number = ! is_numeric( $number ) ? '' : $number;
				$number = ( 0 > $number ) ? '' : $number;
				return $number;
			},
			$value
		)
	);
	$value = implode( "\n", $value );

	return $value;
}

/**
 * Registers plugin settings and settings form fields.
 *
 * @since 3.1.0
 *
 * @see register_setting
 * @see add_settings_section
 * @see add_settings_field
 */
add_action(
	'admin_init',
	function(): void {
		$slug   = 'hrswp-theme';
		$option = 'hrswp_plugins_protected_ids';

		register_setting(
			$slug,
			$option,
			array(
				'sanitize_callback' => __NAMESPACE__ . '\sanitize_setting_int_list',
			)
		);

		add_settings_section(
			$slug . '_section_protected_ids',
			esc_html__( 'Protected Posts and Pages', 'hrswp-blocks' ),
			'__return_true',
			$slug
		);

		add_settings_field(
			$option,
			esc_html__( 'Protected IDs', 'hrswp-blocks' ),
			__NAMESPACE__ . '\settings_field_protected_ids',
			$slug,
			$slug . '_section_protected_ids'
		);
	}
);
