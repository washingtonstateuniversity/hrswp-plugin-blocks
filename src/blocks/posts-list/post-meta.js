/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { dateI18n, format, getSettings } from '@wordpress/date';

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
		instanceId,
	} = props;

	const dateFormat = getSettings().formats.date;

	const hasPostTerms =
		displayPostCategory || displayPostTag || displayPostTaxonomy;

	// Move `post_tags` to the end.
	if ( hasPostTerms && taxonomies ) {
		taxonomies.push(
			taxonomies.splice(
				taxonomies.findIndex( ( i ) => i.slug === 'post_tag' ),
				1
			)[ 0 ]
		);
	}

	return (
		<div className="hrswp-block-posts-list__meta">
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
						prefix = 'Tagged: ';
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
							instanceId={ instanceId }
						/>
					);
				} ) }
			{ displayPostDate && post.date_gmt && (
				<p className="hrswp-block-posts-list__post-date">
					{ __( 'Published on ' ) }
					<time dateTime={ format( 'c', post.date_gmt ) }>
						{ dateI18n( dateFormat, post.date_gmt ) }
					</time>
				</p>
			) }
		</div>
	);
};
