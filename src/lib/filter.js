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
	/**
	 * Instantiates a filter on the given search form block.
	 *
	 * @param {Node}   content A search form block to search and filter within.
	 * @param {number} ref     A unique numeric reference for each accordion.
	 */
	constructor(content, ref) {
		this._parent = content;
		this._ref = ref;
		this._content = content.querySelector('.wp-block-hrswp-filter-section');

		this._setupSearchField();

		this._searchInput = content.querySelector('.wp-block-search__input');
		this._searchReset = content.querySelector('button');

		this._markInstance = new Mark(this._content);

		this.find = this.find.bind(this);
		this.reset = this.reset.bind(this);

		this._handleURLSearchParams();
		this._addEventListeners();
	}

	_setupSearchField() {
		const searchFieldInputHtml = `<div class="wp-block-search">
			<label class="wp-block-search__label screen-reader-text" hrswp-block-search-filter__input-${this._ref}>Search</label>
			<div class="wp-block-search__inside-wrapper">
				<input id="hrswp-block-search-filter__input-${this._ref}" class="wp-block-search__input" type="search" name="hrswp-filter-search" value="" placeholder="Search …">
				<button class="wp-block-search__button" id="hrswp-block-search-filter__reset-${this._ref}">Reset</button>
			</div>
		</div>`;

		this._parent.insertAdjacentHTML('afterbegin', searchFieldInputHtml);
	}

	/**
	 * Finds matching terms, highlights them, and filters out non-matches.
	 *
	 * Uses the mark.js library and custom callback logic to highlight text
	 * nodes matching a given search term and filter out those that do not
	 * match.
	 */
	find() {
		const instance = this._markInstance;
		const keyword = this._searchInput.value;
		const content = this._content;

		/**
		 * @type {NodeList} All nodes with the class 'show' assigned by a previous filter.
		 */
		const previousMatches = content.querySelectorAll('.show');
		const currentMatches = [];

		/**
		 * @type {Object} Options for the mark.js `mark()` method
		 */
		const options = {
			/**
			 * A callback to filter content based on matches.
			 *
			 * This is called for each match. It must return true for the
			 * mark to be added. Return false to stop the mark.
			 *
			 * @param {Node}   node The text node that includes the match.
			 * @param {string} term The term that has been found.
			 */
			filter: (node, term) => {
				/**
				 * Don't filter content if the search term is shorter than
				 * two characters in length to prevent overzealous filtering.
				 */
				if (2 > term.length) {
					content.classList.remove('filtering-active');
					previousMatches.forEach((match) => {
						match.classList.remove('show');
					});

					return true;
				}

				/**
				 * Store the node containing each match and all of that node's
				 * ancestors in an array.
				 *
				 * Starting with the matching text node's parent, which should
				 * be its containing element, walk up the node tree until reaching
				 * the search filter section container. Add each node to the
				 * `currentMatches` array. This should allow hiding non-matching
				 * siblings and whole elements while not hiding a matching element's
				 * own parent or ancestor nodes.
				 */
				let parent = node.parentNode;
				while (parent !== content) {
					currentMatches.push(parent);
					parent = parent.parentNode;
				}

				// Trigger hiding non-matching content with 'filtering-active' class.
				content.classList.add('filtering-active');

				/**
				 * Remove the 'show' class from all elements that had it already.
				 * Without this, the 'show' class will linger for elements that previously
				 * matched but no longer do.
				 */
				previousMatches.forEach((match) => {
					match.classList.remove('show');
				});

				/**
				 * Reassign/retain the 'show' class for all current matches.
				 */
				currentMatches.forEach((match) => {
					match.classList.add('show');
				});

				return true;
			},
			/**
			 * A callback that resets the filtering when there are no matches.
			 *
			 * When the user enters a search term that isn't found all of the
			 * content should remain or become visible.
			 */
			noMatch: () => {
				content.classList.remove('filtering-active');
				previousMatches.forEach((match) => {
					match.classList.remove('show');
				});
			},
		};

		/**
		 * Calls the mark.js `unmark()` method to remove all highlights and
		 * hooks into its `done` callback to re-highlight matching terms with
		 * the `mark()` method.
		 */
		instance.unmark({
			done: () => {
				instance.mark(keyword, options);
			},
		});
	}

	/**
	 * Removes all highlights, empties the search field, and shows all content.
	 */
	reset() {
		this._searchInput.value = '';
		this._markInstance.unmark();
		this._content.classList.remove('filtering-active');
	}

	/*
	 * Updates filter results based on a URL parameter.
	 */
	_handleURLSearchParams() {
		// Check for browser support. Should work in all major browsers other than IE.
		if ('URLSearchParams' in window) {
			const params = new URLSearchParams(window.location.search);
			const filterValue = params.get('filter');
			if (null !== filterValue) {
				this._searchInput.value = encodeURIComponent(filterValue);
				this.find();
			}
		}
	}

	_addEventListeners() {
		this._searchInput.addEventListener('input', this.find);
		this._searchReset.addEventListener('click', this.reset);
	}
}

/**
 * Initializes the search highlighter and filter tool.
 *
 * Creates a new search filter instance for each search form block found.
 */
function init() {
	const searchForms = /** @type {NodeList} */ document.querySelectorAll(
		'.wp-block-hrswp-filter'
	);

	let i = 0;
	searchForms.forEach((searchForm) => {
		new Filter(searchForm, i);
		i++;
	});
}
init();
