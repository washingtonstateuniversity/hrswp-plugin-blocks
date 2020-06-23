export const MIN_EXCERPT_LENGTH = 10;
export const MAX_EXCERPT_LENGTH = 100;
export const MAX_POSTS_COLUMNS = 6;
export const TERMS_LIST_QUERY = { per_page: -1 };

/**
 * Converts an array of taxonomy terms into an array of IDs.
 *
 * @param {Object[]} terms An array of taxonomy term objects.
 * @param {string} taxonomy The name of the taxonomy the terms belong to.
 */
export function taxonomyListToIds( terms, taxonomy ) {
	if ( ! terms ) {
		return null;
	}

	const ids =
		terms[ taxonomy ] && terms[ taxonomy ].length > 0
			? terms[ taxonomy ].map( ( term ) => term.id )
			: [];

	return ids;
}
