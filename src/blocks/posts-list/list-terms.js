/**
 * External dependencies
 */
import { filter, includes } from 'lodash';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

export const ListTerms = ( props ) => {
	const { terms, taxonomySlug, post, prefix } = props;

	// Compat check for WP mismatched slugs.
	let slug;
	if ( 'category' === taxonomySlug || 'post_tag' === taxonomySlug ) {
		slug = 'category' === taxonomySlug ? 'categories' : 'tags';
	} else {
		slug = taxonomySlug;
	}

	const postTerms = post[ slug ];

	const hasTerms = Array.isArray( postTerms ) && postTerms.length;

	if ( ! hasTerms ) {
		return null;
	}

	const listTerms = filter( terms[ taxonomySlug ], ( i ) =>
		includes( postTerms, i.id )
	);

	return (
		<p className={ `wp-block-hrswp-posts-list--${ taxonomySlug }-list` }>
			<span>{ prefix }</span>
			{ listTerms.map( ( term, i ) => {
				const sep = i > 0 ? ', ' : '';
				return (
					<Fragment key={ i }>
						{ sep }
						<a
							href={ term.link }
							target="_blank"
							rel="noreferrer noopener"
						>
							{ term.name }
						</a>
					</Fragment>
				);
			} ) }
		</p>
	);
};
