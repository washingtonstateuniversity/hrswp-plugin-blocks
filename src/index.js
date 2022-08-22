/**
 * WordPress dependencies
 */
import { register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { hideBlocks, registerBlocks } from './blocks';
import { store } from './store';
import './editor.css';
import './style.css';

register( store );
registerBlocks();
hideBlocks();
