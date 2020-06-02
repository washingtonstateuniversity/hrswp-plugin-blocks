/**
 * External dependencies
 */
import {
	get,
	filter,
	includes,
	invoke,
	isUndefined,
	pickBy,
	remove,
} from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, RawHTML } = wp.element;
const {
	BaseControl,
	CheckboxControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	RangeControl,
	Spinner,
	ToggleControl,
	ToolbarGroup,
} = wp.components;
const { __ } = wp.i18n;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	__experimentalImageSizeControl,
} = wp.blockEditor;
const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
import { pin, list, grid } from './icons';
import {
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POSTS_COLUMNS,
	TERMS_LIST_QUERY,
} from './constants';

/**
 * Converts an array of taxonomy terms into an array of IDs.
 *
 * @param {Object[]} terms An array of taxonomy term objects.
 * @param {string} taxonomy The name of the taxonomy the terms belong to.
 */
function taxonomyListToIds( terms, taxonomy ) {
	if ( ! terms ) {
		return null;
	}

	const ids =
		terms[ taxonomy ] && terms[ taxonomy ].length > 0
			? terms[ taxonomy ].map( ( term ) => term.id )
			: [];

	return ids;
}

class PostsListEdit extends Component {
	toggleSelectedTerms( taxonomy, term ) {
		const { attributes, setAttributes } = this.props;
		const { selectedTermLists } = attributes;

		const allTerms = ! isUndefined( selectedTermLists )
			? selectedTermLists
			: {};
		const taxonomyTerms = ! isUndefined( allTerms[ taxonomy ] )
			? allTerms[ taxonomy ]
			: ( allTerms[ taxonomy ] = [] );
		const hasTerm = includes(
			taxonomyListToIds( allTerms, taxonomy ),
			term.id
		);

		const newTerms = hasTerm
			? remove( taxonomyTerms, ( value ) => {
					return value.id !== term.id;
			  } )
			: [ ...taxonomyTerms, term ];

		allTerms[ taxonomy ] = newTerms;

		setAttributes( { selectedTermLists: allTerms } );
	}

	render() {
		const {
			attributes,
			setAttributes,
			className,
			imageSizeOptions,
			latestPosts,
			taxonomies,
			termLists,
			defaultImageWidth,
			defaultImageHeight,
		} = this.props;
		const {
			displayFeaturedImage,
			displayPostContentRadio,
			displayPostContent,
			displayPostDate,
			postLayout,
			columns,
			order,
			orderBy,
			selectedTermLists,
			postsToShow,
			excerptLength,
			featuredImageAlign,
			featuredImageSizeSlug,
			featuredImageSizeWidth,
			featuredImageSizeHeight,
		} = attributes;

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Post content settings' ) }>
					<ToggleControl
						label={ __( 'Post content' ) }
						checked={ displayPostContent }
						onChange={ ( value ) =>
							setAttributes( { displayPostContent: value } )
						}
					/>
					{ displayPostContent && (
						<RadioControl
							label={ __( 'Show:' ) }
							selected={ displayPostContentRadio }
							options={ [
								{ label: __( 'Excerpt' ), value: 'excerpt' },
								{
									label: __( 'Full post' ),
									value: 'full_post',
								},
							] }
							onChange={ ( value ) =>
								setAttributes( {
									displayPostContentRadio: value,
								} )
							}
						/>
					) }
					{ displayPostContent &&
						displayPostContentRadio === 'excerpt' && (
							<RangeControl
								label={ __( 'Max number of words in excerpt' ) }
								value={ excerptLength }
								onChange={ ( value ) =>
									setAttributes( { excerptLength: value } )
								}
								min={ MIN_EXCERPT_LENGTH }
								max={ MAX_EXCERPT_LENGTH }
							/>
						) }
				</PanelBody>

				<PanelBody title={ __( 'Post meta settings' ) }>
					<ToggleControl
						label={ __( 'Display post date' ) }
						checked={ displayPostDate }
						onChange={ ( value ) =>
							setAttributes( { displayPostDate: value } )
						}
					/>
				</PanelBody>

				<PanelBody title={ __( 'Featured image settings' ) }>
					<ToggleControl
						label={ __( 'Display featured image' ) }
						checked={ displayFeaturedImage }
						onChange={ ( value ) =>
							setAttributes( { displayFeaturedImage: value } )
						}
					/>
					{ displayFeaturedImage && (
						<>
							<__experimentalImageSizeControl
								onChange={ ( value ) => {
									const newAttrs = {};
									if ( value.hasOwnProperty( 'width' ) ) {
										newAttrs.featuredImageSizeWidth =
											value.width;
									}
									if ( value.hasOwnProperty( 'height' ) ) {
										newAttrs.featuredImageSizeHeight =
											value.height;
									}
									setAttributes( newAttrs );
								} }
								slug={ featuredImageSizeSlug }
								width={ featuredImageSizeWidth }
								height={ featuredImageSizeHeight }
								imageWidth={ defaultImageWidth }
								imageHeight={ defaultImageHeight }
								imageSizeOptions={ imageSizeOptions }
								onChangeImage={ ( value ) =>
									setAttributes( {
										featuredImageSizeSlug: value,
										featuredImageSizeWidth: undefined,
										featuredImageSizeHeight: undefined,
									} )
								}
							/>
							<BaseControl>
								<BaseControl.VisualLabel>
									{ __( 'Image alignment' ) }
								</BaseControl.VisualLabel>
								<BlockAlignmentToolbar
									value={ featuredImageAlign }
									onChange={ ( value ) =>
										setAttributes( {
											featuredImageAlign: value,
										} )
									}
									controls={ [ 'left', 'center', 'right' ] }
									isCollapsed={ false }
								/>
							</BaseControl>
						</>
					) }
				</PanelBody>

				<PanelBody
					className={ `${ className } taxonomy-filter` }
					title={ __( 'Filtering' ) }
					initialOpen={ false }
				>
					{ taxonomies.map( ( taxonomy ) => (
						<PanelBody
							className={ 'taxonomy-filter--body' }
							key={ taxonomy.slug }
							title={ taxonomy.name }
							initialOpen={ false }
						>
							<ul className="edit__checklist">
								{ termLists[ taxonomy.slug ] &&
									termLists[ taxonomy.slug ].map(
										( term ) => (
											<li
												key={ term.id }
												className="components-checkbox-control__label"
											>
												<CheckboxControl
													label={ term.name }
													checked={ includes(
														taxonomyListToIds(
															selectedTermLists,
															taxonomy.rest_base
														),
														term.id
													) }
													onChange={ () => {
														this.toggleSelectedTerms(
															taxonomy.rest_base,
															term
														);
													} }
												/>
											</li>
										)
									) }
							</ul>
						</PanelBody>
					) ) }
				</PanelBody>

				<PanelBody
					title={ __( 'Order and number' ) }
					initialOpen={ false }
				>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						onOrderChange={ ( value ) =>
							setAttributes( { order: value } )
						}
						onOrderByChange={ ( value ) =>
							setAttributes( { orderBy: value } )
						}
						onNumberOfItemsChange={ ( value ) =>
							setAttributes( { postsToShow: value } )
						}
					/>

					{ postLayout === 'grid' && (
						<RangeControl
							label={ __( 'Columns' ) }
							value={ columns }
							onChange={ ( value ) =>
								setAttributes( { columns: value } )
							}
							min={ 2 }
							max={
								! hasPosts
									? MAX_POSTS_COLUMNS
									: Math.min(
											MAX_POSTS_COLUMNS,
											latestPosts.length
									  )
							}
							required
						/>
					) }
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
		if ( ! hasPosts ) {
			return (
				<>
					{ inspectorControls }
					<Placeholder icon={ pin } label={ __( 'Latest Posts' ) }>
						{ ! Array.isArray( latestPosts ) ? (
							<Spinner />
						) : (
							__( 'No posts found.' )
						) }
					</Placeholder>
				</>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts =
			latestPosts.length > postsToShow
				? latestPosts.slice( 0, postsToShow )
				: latestPosts;

		const layoutControls = [
			{
				icon: list,
				title: __( 'List view' ),
				onClick: () => setAttributes( { postLayout: 'list' } ),
				isActive: postLayout === 'list',
			},
			{
				icon: grid,
				title: __( 'Grid view' ),
				onClick: () => setAttributes( { postLayout: 'grid' } ),
				isActive: postLayout === 'grid',
			},
		];

		const dateFormat = __experimentalGetSettings().formats.date;

		return (
			<>
				{ inspectorControls }
				<BlockControls>
					<ToolbarGroup controls={ layoutControls } />
				</BlockControls>
				<ul
					className={ classnames( className, {
						'wp-block-latest-posts__list': true,
						'is-grid': postLayout === 'grid',
						'has-dates': displayPostDate,
						[ `columns-${ columns }` ]: postLayout === 'grid',
					} ) }
				>
					{ displayPosts.map( ( post, i ) => {
						const titleTrimmed = invoke( post, [
							'title',
							'rendered',
							'trim',
						] );
						let excerpt = post.excerpt.rendered;

						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;

						excerpt =
							excerptElement.textContent ||
							excerptElement.innerText ||
							'';

						const imageSourceUrl = post.featuredImageSourceUrl;

						const imageClasses = classnames( {
							'wp-block-latest-posts__featured-image': true,
							[ `align${ featuredImageAlign }` ]: !! featuredImageAlign,
						} );

						const needsReadMore =
							excerptLength <
								excerpt.trim().split( ' ' ).length &&
							post.excerpt.raw === '';

						const postExcerpt = needsReadMore ? (
							<>
								{ excerpt
									.trim()
									.split( ' ', excerptLength )
									.join( ' ' ) }
								{ /* translators: excerpt truncation character, default …  */ }
								{ __( ' … ' ) }
								<a
									href={ post.link }
									target="_blank"
									rel="noopener noreferrer"
								>
									{ __( 'Read more' ) }
								</a>
							</>
						) : (
							excerpt
						);

						return (
							<li key={ i }>
								{ displayFeaturedImage && (
									<div className={ imageClasses }>
										{ imageSourceUrl && (
											<img
												src={ imageSourceUrl }
												alt=""
												style={ {
													maxWidth: featuredImageSizeWidth,
													maxHeight: featuredImageSizeHeight,
												} }
											/>
										) }
									</div>
								) }
								<a
									href={ post.link }
									target="_blank"
									rel="noreferrer noopener"
								>
									{ titleTrimmed ? (
										<RawHTML>{ titleTrimmed }</RawHTML>
									) : (
										__( '(no title)' )
									) }
								</a>
								{ displayPostDate && post.date_gmt && (
									<time
										dateTime={ format(
											'c',
											post.date_gmt
										) }
										className="wp-block-latest-posts__post-date"
									>
										{ dateI18n(
											dateFormat,
											post.date_gmt
										) }
									</time>
								) }
								{ displayPostContent &&
									displayPostContentRadio === 'excerpt' && (
										<div className="wp-block-latest-posts__post-excerpt">
											{ postExcerpt }
										</div>
									) }
								{ displayPostContent &&
									displayPostContentRadio === 'full_post' && (
										<div className="wp-block-latest-posts__post-full-content">
											<RawHTML key="html">
												{ post.content.raw.trim() }
											</RawHTML>
										</div>
									) }
							</li>
						);
					} ) }
				</ul>
			</>
		);
	}
}

export default withSelect( ( select, props ) => {
	const {
		featuredImageSizeSlug,
		postsToShow,
		order,
		orderBy,
		selectedTermLists,
	} = props.attributes;
	const { getEntityRecords, getMedia, getTaxonomies } = select( 'core' );
	const { getSettings } = select( 'core/block-editor' );
	const { imageSizes, imageDimensions } = getSettings();

	const latestPostsQuery = pickBy(
		{
			order,
			orderby: orderBy,
			per_page: postsToShow,
		},
		( value ) => ! isUndefined( value )
	);
	if ( ! isUndefined( selectedTermLists ) ) {
		Object.entries( selectedTermLists ).forEach( ( [ slug, terms ] ) => {
			latestPostsQuery[ slug ] = terms.map( ( term ) => term.id );
		} );
	}
	const posts = getEntityRecords( 'postType', 'post', latestPostsQuery );

	const allTaxonomies = getTaxonomies( TERMS_LIST_QUERY );
	const taxonomies = filter( allTaxonomies, ( taxonomy ) =>
		includes( taxonomy.types, 'post' )
	);
	const termLists = {};
	taxonomies.forEach( ( { slug } ) => {
		Object.defineProperty( termLists, slug, {
			value: getEntityRecords( 'taxonomy', slug, TERMS_LIST_QUERY ),
		} );
	} );

	const imageSizeOptions = imageSizes
		.filter( ( { slug } ) => slug !== 'full' )
		.map( ( { name, slug } ) => ( { value: slug, label: name } ) );

	return {
		defaultImageWidth: get(
			imageDimensions,
			[ featuredImageSizeSlug, 'width' ],
			0
		),
		defaultImageHeight: get(
			imageDimensions,
			[ featuredImageSizeSlug, 'height' ],
			0
		),
		imageSizeOptions,
		taxonomies,
		termLists,
		latestPosts: ! Array.isArray( posts )
			? posts
			: posts.map( ( post ) => {
					if ( post.featured_media ) {
						const image = getMedia( post.featured_media );
						let url = get(
							image,
							[
								'media_details',
								'sizes',
								featuredImageSizeSlug,
								'source_url',
							],
							null
						);
						if ( ! url ) {
							url = get( image, 'source_url', null );
						}
						return { ...post, featuredImageSourceUrl: url };
					}
					return post;
			  } ),
	};
} )( PostsListEdit );