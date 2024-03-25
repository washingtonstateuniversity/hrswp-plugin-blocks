/**
 * External dependencies
 */
import { filter, includes } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { store as noticeStore } from '@wordpress/notices';

export const ListTerms = ( props ) => {
	const { terms, taxonomySlug, post, prefix, instanceId } = props;

	// Compat check for WP mismatched slugs.
	let slug;
	if ( 'category' === taxonomySlug || 'post_tag' === taxonomySlug ) {
		slug = 'category' === taxonomySlug ? 'categories' : 'tags';
	} else {
		slug = taxonomySlug;
	}

	const postTerms = post[ slug ];

	const hasTerms = Array.isArray( postTerms ) && postTerms.length;

	// If a user clicks to a link prevent redirection and show a warning.
	const { createWarningNotice, removeNotice } = useDispatch( noticeStore );
	let noticeId;
	const showRedirectionPreventedNotice = ( event ) => {
		event.preventDefault();
		// Remove previous warning if any, to show one at a time per block.
		removeNotice( noticeId );
		noticeId = `block-library/hrswp-blocks/posts-list/redirection-prevented/${ instanceId }`;
		createWarningNotice( __( 'Links are disabled in the editor.' ), {
			id: noticeId,
			type: 'snackbar',
		} );
	};

	if ( ! hasTerms ) {
		return null;
	}

	const listTerms = filter( terms[ taxonomySlug ], ( i ) =>
		includes( postTerms, i.id )
	);

	return (
		<p className={ `hrswp-block-posts-list__${ taxonomySlug }-list` }>
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
							onClick={ showRedirectionPreventedNotice }
						>
							{ term.name }
						</a>
					</Fragment>
				);
			} ) }
		</p>
	);
};
