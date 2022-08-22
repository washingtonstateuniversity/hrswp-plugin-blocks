/**
 * Returns an action object used in fetching data from apiFetch.
 *
 * @param {string} path The WP REST API path.
 *
 * @return {Object} Action object.
 */
export function fetchFromAPI( path ) {
	return {
		type: 'FETCH_FROM_API',
		path,
	};
}

/**
 * Returns an action object for fetching table names from the config.
 *
 * @param {Object[]} tableNames Array of table name objects.
 *
 * @return {Object} Action object.
 */
export function getTableNames( tableNames ) {
	return {
		type: 'GET_TABLE_NAMES',
		tableNames,
	};
}

/**
 * Returns an action object of classification data.
 *
 * @param {Object[]} jobClassificationData Array of job classification data.
 *
 * @return {Object} Action object.
 */
export function getJobClassificationData( jobClassificationData ) {
	return {
		type: 'GET_JOB_CLASSIFICATION_DATA',
		jobClassificationData,
	};
}

/**
 * Returns an action object of salary data.
 *
 * @param {Object[]} salaryData Array of salary data.
 *
 * @return {Object} Action object.
 */
export function getSalaryData( salaryData ) {
	return {
		type: 'GET_SALARY_DATA',
		salaryData,
	};
}
