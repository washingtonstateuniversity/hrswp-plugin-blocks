/**
 * External dependencies.
 */
import Mark from 'mark.js';

/**
 * Filters
 *
 * Uses the mark.js library to handle searching and marking, and custom callback methods
 * to handle filtering.
 */
class Filter {
	constructor( content ) {
		this._content = content.querySelector( '.wp-block-hrswp-search-filter-section' );
		this._searchInput = content.querySelector( '.wp-block-search__input' );
		this._searchReset = content.querySelector( 'button' );

		this._markInstance = new Mark( this._content );

		this.find = this.find.bind( this );
		this.reset = this.reset.bind( this );

		this._addEventListeners();
	}

	find() {
		const instance = this._markInstance;
		const keyword = this._searchInput.value;
		const content = this._content;
		const previousMatches = content.querySelectorAll( '.show' );
		const currentMatches = [];

		const options = {
			filter: ( node, term ) => {
				if ( 2 > term.length ) {
					content.classList.remove( 'filtering-active' );
					previousMatches.forEach( ( match ) => {
						match.classList.remove( 'show' );
					} );

					return true;
				}
				let parent = node.parentNode;
				while ( parent !== content ) {
					currentMatches.push( parent );
					parent = parent.parentNode;
				}

				content.classList.add( 'filtering-active' );
				previousMatches.forEach( ( match ) => {
					match.classList.remove( 'show' );
				} );
				currentMatches.forEach( ( match ) => {
					match.classList.add( 'show' );
				} );

				return true;
			},
			noMatch: () => {
				content.classList.remove( 'filtering-active' );
				previousMatches.forEach( ( match ) => {
					match.classList.remove( 'show' );
				} );
			},
		};

		instance.unmark( {
			done: () => {
				instance.mark( keyword, options );
			},
		} );
	}

	reset() {
		this._searchInput.value = '';
		this._markInstance.unmark();
		this._content.classList.remove( 'filtering-active' );
	}

	_addEventListeners() {
		this._searchInput.addEventListener( 'input', this.find );
		this._searchReset.addEventListener(	'click', this.reset );
	}
}

/*
 * Updates filter results based on a URL parameter.
 */
// async function handleURLSearchParams() {
// 	if ( 'URLSearchParams' in window ) {
// 		const params = new URLSearchParams( window.location.search );
// 		const filterValue = params.get( 'filter' );
// 		if ( null !== filterValue ) {
// 			input.value = sanitize( filterValue );
// 			await handleInputChange();
// 		}
// 	}
// }

/**
 * Initializes the search highlighter and filter tool.
 *
 * Creates a new search filter instance for each search form block found.
 */
function init() {
	const searchForms = /** @type {NodeList} */ document.querySelectorAll( '.wp-block-hrswp-search-filter' );

	searchForms.forEach( ( searchForm ) => {
		new Filter( searchForm );
	} );

	// handleURLSearchParams();
}
init();
