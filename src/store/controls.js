/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Defines the control function for fetching data from the WP REST API.
 *
 * @param {Object} action The action object containing the REST API path for `apiFetch`
 *
 * @return {Object} Control object.
 */
function FETCH_FROM_API( action ) {
	return apiFetch( { path: action.path } );
}

export const controls = { FETCH_FROM_API };
