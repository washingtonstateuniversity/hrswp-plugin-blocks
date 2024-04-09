<?php
/**
 * HRSWP data query functions.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\Query;

use HRSWP\Blocks;
use HRSWP\Blocks\Sideload_Image;
use HRSWP\SQLSRV\Sqlsrv_DB;
use HRSWP\SQLSRV\Sqlsrv_Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Returns a list of the available SQL Server tables.
 *
 * Pulls from the HRSWP Sqlsrv DB plugin config file.
 *
 * The returned list is a key-value JSON array where each table has a
 * value (the table label) and a label (a generated human-reader-friendly
 * version of the table label).
 *
 * @since 3.2.0
 *
 * @return \WP_REST_Response||\WP_Error||null JSON feed of returned objects, null if no tables are found.
 */
function get_tables_list(): ?object {
	// Check to make sure required plugin is active.
	if ( ! Blocks\verify_plugin_dependencies() ) {
		return new \WP_Error( 'missing-plugin', __( 'The HRSWP Sqlsrv DB plugin must be activated.', 'hrswp-blocks' ) );
	}

	// Initialize the HRSWP Sqlsrv DB connector.
	$msdb      = new Sqlsrv_DB\Sqlsrv_DB();
	$db_tables = $msdb->list_tables();

	if ( ! $db_tables ) {
		return null;
	}

	// Initialize the tables array with a default value.
	$tables = array(
		array(
			'value' => '',
			'label' => __( 'Select an option', 'hrswp-blocks' ),
		),
	);

	foreach ( $db_tables as $db_table ) {
		$tables[] = array(
			'value' => $db_table,
			'label' => ucwords( str_replace( '-', ' ', $db_table ) ),
		);
	}

	return new \WP_REST_Response( $tables, 200 );
}

/**
 * Returns data from a given Job Classification data table.
 *
 * @since 3.2.0
 *
 * @param \WP_REST_Request $request Data from the request passed to the callback.
 * @return \WP_REST_Response||\WP_Error JSON feed of returned data, WP Error if missing table.
 */
function get_job_classification_data( \WP_REST_Request $request ): object {
	// Check to make sure required plugin is active.
	if ( ! Blocks\verify_plugin_dependencies() ) {
		return new \WP_Error( 'missing-plugin', __( 'The HRSWP Sqlsrv DB plugin must be activated.', 'hrswp-blocks' ) );
	}

	if ( ! $request || '' === $request['table'] ) {
		return new \WP_Error( 'missing-table', __( 'No table specified for query.', 'hrswp-blocks' ) );
	}

	if ( 'undefined' !== $request['table'] ) {
		$args = array(
			'dataset' => array(
				array(
					'table'  => isset( $request['table'] ) ? sanitize_key( $request['table'] ) : '',
					'fields' => array(
						'ClassCode',
						'JobTitle',
						'SalRangeNum',
						'SalrangeWExceptions',
						'Salary_Min',
						'Salary_Max',
					),
				),
			),
			'orderby' => 'JobTitle',
		);

		$result = new Sqlsrv_Query\Sqlsrv_Query( $args );
		$result = ( ! empty( $result->records ) )
			? $result->records
			: array( 'request' => $request['table'] );

		return new \WP_REST_Response( $result, 200 );
	}

	return new \WP_REST_Response( array( 'request' => $request['table'] ), 304 );
}

/**
 * Returns data from a given Salary data table.
 *
 * @since 3.2.0
 *
 * @param \WP_REST_Request $request Data from the request passed to the callback.
 * @return \WP_REST_Response||\WP_Error JSON feed of returned data, WP Error if missing table.
 */
function get_salary_data( \WP_REST_Request $request ): object {
	// Check to make sure required plugin is active.
	if ( ! Blocks\verify_plugin_dependencies() ) {
		return new \WP_Error( 'missing-plugin', __( 'The HRSWP Sqlsrv DB plugin must be activated.', 'hrswp-blocks' ) );
	}

	if ( ! $request || '' === $request['table'] ) {
		return new \WP_Error( 'missing-table', __( 'No table specified for query.', 'hrswp-blocks' ) );
	}

	if ( 'undefined' !== $request['table'] ) {
		$args = array(
			'dataset' => array(
				array(
					'table' => isset( $request['table'] ) ? sanitize_key( $request['table'] ) : '',
				),
			),
		);

		$result = new Sqlsrv_Query\Sqlsrv_Query( $args );
		$result = ( ! empty( $result->records ) )
			? $result->records
			: array( 'request' => $request['table'] );

		return new \WP_REST_Response( $result, 200 );
	}

	return new \WP_REST_Response( array( 'request' => $request['table'] ), 304 );
}

/**
 * Imports data from a given Awards data table.
 *
 * @since 3.2.0
 *
 * @param \WP_REST_Request $request Data from the request passed to the callback.
 * @return \WP_REST_Response||\WP_Error JSON feed of returned data, WP Error if missing table.
 */
function import_awards_data( \WP_REST_Request $request ): object {
	// Check to make sure required plugin is active.
	if ( ! Blocks\verify_plugin_dependencies() ) {
		return new \WP_Error( 'missing-plugin', __( 'The HRSWP Sqlsrv DB plugin must be activated.', 'hrswp-blocks' ) );
	}

	if ( ! $request || '' === $request['table'] ) {
		return new \WP_Error( 'missing-table', __( 'No table specified for query.', 'hrswp-blocks' ) );
	}

	// Get the awards records from the external database.
	if ( 'undefined' !== $request['table'] ) {
		$args = array(
			'dataset' => array(
				array(
					'table'  => 'awards',
					'fields' => array(
						'BinaryFile',
						'GroupDescription',
						'GroupName',
						'GroupYear',
					),
				),
			),
			'orderby' => 'GroupYear',
		);

		$result = new Sqlsrv_Query\Sqlsrv_Query( $args );
		$awards = $result->records ?? null;
	}

	if ( ! $awards ) {
		return new \WP_REST_Response( array( 'request' => $request['table'] ), 304 );
	}

	// Import the retrieved awards into the media library.
	foreach ( $awards as $award ) {
		$image_props = array(
			// phpcs:disable WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			'title'          => $award->GroupName,
			'image_contents' => $award->BinaryFile,
			'group_year'     => $award->GroupYear,
			'page_id'        => (int) $request['post'],
			'description'    => $award->GroupDescription,
			'skip_if_exists' => true,
			// phpcs:enable
		);

		$image = new Sideload_Image\Sideload_Image( $image_props );

		if ( is_wp_error( $image ) ) {
			return new \WP_REST_Response( array( 'request' => $request['table'] ), 304 );
		}
	}

	// Get the imported and existing awards.
	$attachments = get_children(
		array(
			'post_parent'    => (int) $request['post'],
			'post_type'      => 'attachment',
			'posts_per_page' => -1,
			'orderby'        => 'meta_value_num',
			'meta_key'       => '_hrswp_sqlsrv_db_award_group', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
			'order'          => 'ASC',
		)
	);

	return new \WP_REST_Response( $attachments, 200 );
}
