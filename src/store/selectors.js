/**
 * Returns table names from the config.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object[]} Array of table name objects.
 */
export function getTableNames( state ) {
	const { tableNames } = state;
	return tableNames;
}

/**
 * Returns job classification data.
 *
 * @param {Object} state Global application state.
 * @return {Object[]} Array of job classification data.
 */
export function getJobClassificationData( state ) {
	const { jobClassificationData } = state;
	return jobClassificationData;
}

/**
 * Returns salary data.
 *
 * @param {Object} state Global application state.
 * @return {Object[]} Array of salary data.
 */
export function getSalaryData( state ) {
	const { salaryData } = state;
	return salaryData;
}
