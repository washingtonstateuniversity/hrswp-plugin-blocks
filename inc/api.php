<?php
/**
 * Registers a new WP REST API endpoint.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\API;

use HRSWP\Blocks\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the REST API routes.
 *
 * @since 3.2.0
 *
 * @see register_rest_route
 * @see sanitize_key
 * @see current_user_can
 */
add_action(
	'rest_api_init',
	function(): void {
		$namespace = 'hrswp-blocks/v1';

		// Register a gated route to access available tables.
		register_rest_route(
			$namespace,
			'/tables',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => 'HRSWP\Blocks\Query\get_tables_list',
				'permission_callback' => function (): bool {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		// Register a public route to get job classification data.
		register_rest_route(
			$namespace,
			'/jobclassification/table/(?P<table>[a-z0-9_\-]+)',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => 'HRSWP\Blocks\Query\get_job_classification_data',
				'args'                => array(
					'table' => array(
						'sanitize_callback' => function( string $param ): string {
							return sanitize_key( $param );
						},
					),
				),
				'permission_callback' => function (): bool {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		// Register a public route to get job classification data.
		register_rest_route(
			$namespace,
			'/salarydata/table/(?P<table>[a-z0-9_\-]+)',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => 'HRSWP\Blocks\Query\get_salary_data',
				'args'                => array(
					'table' => array(
						'sanitize_callback' => function( string $param ): string {
							return sanitize_key( $param );
						},
					),
				),
				'permission_callback' => function (): bool {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		// Register a route to import awards data as attachement posts.
		register_rest_route(
			$namespace,
			'/awardsdata/table/(?P<table>[a-z0-9_\-]+)/post/(?P<post>[a-z0-9_\-]+)',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => 'HRSWP\Blocks\Query\import_awards_data',
				'args'                => array(
					'table' => array(
						'sanitize_callback' => function( string $param ): string {
							return sanitize_key( $param );
						},
					),
					'post'  => array(
						'sanitize_callback' => function( string $param ): string {
							return absint( sanitize_key( $param ) );
						},
					),
				),
				'permission_callback' => function (): bool {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}
);
