/**
 * WordPress dependencies
 */
import { createReduxStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import { controls } from './controls';
import { STORE_NAME } from './constants';

const storeConfig = () => ( {
	reducer,
	actions,
	selectors,
	controls,
	resolvers,
} );

/**
 * Store definition for the data namespace.
 *
 * @type {Object}
 */
export const store = createReduxStore( STORE_NAME, storeConfig() );
