<?php
/**
 * HRSWP data query functions.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\Query;

use HRSWP\SQLSRV\Sqlsrv_Query;
use HRSWP\SQLSRV\Sqlsrv_DB;

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
 * @return array|null JSON feed of returned objects, null if no tables are found.
 */
function get_tables_list(): ?array {
	// Check to make sure required plugin is active.
	if ( ! in_array(
			'hrswp-plugin-sqlsrv-db/hrswp-sqlsrv-db.php',
			apply_filters( 'active_plugins', get_option( 'active_plugins' ) ),
			true
	) ) {
		return new \WP_Error( 'missing-plugin', __( 'The HRSWP Sqlsrv DB must be activated.', 'hrswp-blocks' ) );
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
 * @return array|null JSON feed of returned data, null if no data is found.
 */
function get_job_classification_data( \WP_REST_Request $request ): ?array {
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
 * @return array|null JSON feed of returned data, null if no data is found.
 */
function get_salary_data( \WP_REST_Request $request ): ?array {
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
