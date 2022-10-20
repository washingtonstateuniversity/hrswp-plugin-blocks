/**
 * Internal dependencies
 */
import { POSITION_DATA_DEFAULTS } from './defaults';

function jobData( state = POSITION_DATA_DEFAULTS, action ) {
	switch ( action.type ) {
		case 'GET_TABLE_NAMES':
			return {
				...state,
				tableNames: action.tableNames,
			};
		case 'GET_JOB_CLASSIFICATION_DATA':
			return {
				...state,
				jobClassificationData: action.jobClassificationData,
			};
		case 'GET_SALARY_DATA':
			return {
				...state,
				salaryData: action.salaryData,
			};
		case 'IMPORT_AWARDS_DATA':
			return {
				...state,
				awardsData: action.awardsData,
			};
	}

	return state;
}

export default jobData;
