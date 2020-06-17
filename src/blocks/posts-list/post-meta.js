/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

/**
 * Internal dependencies
 */
import { ListTerms } from './list-terms';

export const PostMeta = ( props ) => {
	const {
		displayPostCategory,
		displayPostDate,
		displayPostTag,
		displayPostTaxonomy,
		post,
		taxonomies,
		termLists,
	} = props;

	const dateFormat = __experimentalGetSettings().formats.date;

	const hasPostTerms =
		displayPostCategory || displayPostTag || displayPostTaxonomy;

	return (
		<div className="wp-block-hrswp-posts-list--meta">
			{ displayPostDate && post.date_gmt && (
				<p className="wp-block-hrswp-posts-list--post-date">
					{ __( 'Published on' ) }
					<time dateTime={ format( 'c', post.date_gmt ) }>
						{ dateI18n( dateFormat, post.date_gmt ) }
					</time>
				</p>
			) }
			{ hasPostTerms &&
				taxonomies.map( ( taxonomy ) => {
					let prefix;
					if ( 'category' === taxonomy.slug ) {
						if ( ! displayPostCategory ) {
							return null;
						}
						prefix = __( 'More on: ' );
					} else if ( 'post_tag' === taxonomy.slug ) {
						if ( ! displayPostTag ) {
							return null;
						}
						prefix = __( 'In: ' );
					} else {
						if ( ! displayPostTaxonomy ) {
							return null;
						}
						prefix = `${ taxonomy.labels.singular_name }: `;
					}

					return (
						<ListTerms
							key={ taxonomy.slug }
							post={ post }
							terms={ termLists }
							taxonomySlug={ taxonomy.slug }
							prefix={ prefix }
						/>
					);
				} ) }
		</div>
	);
}
