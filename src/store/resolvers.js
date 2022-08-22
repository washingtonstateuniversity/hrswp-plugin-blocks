/**
 * Internal dependencies
 */
import * as actions from './actions';

/**
 * Requests the table names array action object.
 *
 * @return {Object} The table names action object including the table names array.
 */
export function* getTableNames() {
	const path = '/hrswp-blocks/v1/tables/';
	const tableNames = yield actions.fetchFromAPI( path );
	return actions.getTableNames( tableNames );
}

/**
 * Requests the job classification data action object.
 *
 * @param {string} table The table from which to retrieve job classification data.
 *
 * @return {Object} The job classification data action object including the data.
 */
export function* getJobClassificationData( table ) {
	const path = `/hrswp-blocks/v1/jobclassification/table/${ table }`;
	const jobClassificationData = yield actions.fetchFromAPI( path );
	return actions.getJobClassificationData( jobClassificationData );
}

/**
 * Requests the salary data action object.
 *
 * @param {string} table The table from which to retrieve salary data.
 *
 * @return {Object} The salary data action object including the data.
 */
export function* getSalaryData( table ) {
	const path = `/hrswp-blocks/v1/salarydata/table/${ table }`;
	const salaryData = yield actions.fetchFromAPI( path );
	return actions.getSalaryData( salaryData );
}
