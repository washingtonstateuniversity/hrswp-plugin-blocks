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
import { PostMeta } from './post-meta';
import {
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POSTS_COLUMNS,
	TERMS_LIST_QUERY,
	taxonomyListToIds,
} from './shared';

class PostsListEdit extends Component {
	/**
	 * Adds or removes a taxonomy term from the selected terms attribute.
	 *
	 * @param {string} taxonomy A WP taxonomy `rest_base` value.
	 * @param {Object} term The selected term to add or remove.
	 */
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
			postsList,
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
			displayPostCategory,
			displayPostTag,
			displayPostTaxonomy,
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
					<ToggleControl
						label={ __( 'Display post category' ) }
						checked={ displayPostCategory }
						onChange={ ( value ) =>
							setAttributes( { displayPostCategory: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Display post tag' ) }
						checked={ displayPostTag }
						onChange={ ( value ) =>
							setAttributes( { displayPostTag: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Display post taxonomy' ) }
						checked={ displayPostTaxonomy }
						onChange={ ( value ) =>
							setAttributes( { displayPostTaxonomy: value } )
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
											postsList.length
									  )
							}
							required
						/>
					) }
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( postsList ) && postsList.length;
		if ( ! hasPosts ) {
			return (
				<>
					{ inspectorControls }
					<Placeholder icon={ pin } label={ __( 'Posts' ) }>
						{ ! Array.isArray( postsList ) ? (
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
			postsList.length > postsToShow
				? postsList.slice( 0, postsToShow )
				: postsList;

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

		return (
			<>
				{ inspectorControls }
				<BlockControls>
					<ToolbarGroup controls={ layoutControls } />
				</BlockControls>
				<div
					className={ classnames( className, {
						'is-grid': postLayout === 'grid',
						'has-feature-image': displayFeaturedImage,
						'has-full-content':
							displayPostContent &&
							displayPostContentRadio === 'full_post',
						'has-excerpt':
							displayPostContent &&
							displayPostContentRadio === 'excerpt',
						[ `columns-${ columns }` ]: postLayout === 'grid',
					} ) }
				>
					{ displayPosts.map( ( post, i ) => {
						const titleTrimmed = invoke( post, [
							'title',
							'rendered',
							'trim',
						] );

						let excerpt = post.content.rendered;
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt =
							excerptElement.textContent ||
							excerptElement.innerText ||
							'';

						const imageSourceUrl = post.featuredImageSourceUrl;
						const imageClasses = classnames( {
							'wp-block-hrswp-posts-list--featured-image': true,
							[ `size-${ featuredImageSizeSlug }` ]: !! featuredImageSizeSlug,
							[ `align${ featuredImageAlign }` ]: !! featuredImageAlign,
						} );

						const hasPostMeta =
							displayPostDate ||
							displayPostCategory ||
							displayPostTag ||
							displayPostTaxonomy;

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
							</>
						) : (
							excerpt
						);

						return (
							<div
								className="wp-block-hrswp-posts-list--list-item"
								key={ i }
							>
								{ displayFeaturedImage && imageSourceUrl && (
									<figure className={ imageClasses }>
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
									</figure>
								) }

								<div className="wp-block-hrswp-posts-list--body">
									<h3 className="wp-block-hrswp-posts-list--heading">
										<a
											href={ post.link }
											target="_blank"
											rel="noreferrer noopener"
										>
											{ titleTrimmed ? (
												<RawHTML>
													{ titleTrimmed }
												</RawHTML>
											) : (
												__( '(no title)' )
											) }
										</a>
									</h3>
									{ displayPostContent &&
										displayPostContentRadio ===
											'excerpt' && (
											<p className="wp-block-hrswp-posts-list--post-excerpt">
												{ postExcerpt }
											</p>
										) }
									{ displayPostContent &&
										displayPostContentRadio ===
											'full_post' && (
											<div className="wp-block-hrswp-posts-list--post-full-content">
												<RawHTML key="html">
													{ post.content.raw.trim() }
												</RawHTML>
											</div>
										) }

									{ hasPostMeta && (
										<PostMeta
											displayPostCategory={
												displayPostCategory
											}
											displayPostDate={ displayPostDate }
											displayPostTag={ displayPostTag }
											displayPostTaxonomy={
												displayPostTaxonomy
											}
											post={ post }
											taxonomies={ taxonomies }
											termLists={ termLists }
										/>
									) }
								</div>
							</div>
						);
					} ) }
				</div>
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

	const postsListQuery = pickBy(
		{
			order,
			orderby: orderBy,
			per_page: postsToShow,
		},
		( value ) => ! isUndefined( value )
	);
	if ( ! isUndefined( selectedTermLists ) ) {
		Object.entries( selectedTermLists ).forEach( ( [ slug, terms ] ) => {
			postsListQuery[ slug ] = terms.map( ( term ) => term.id );
		} );
	}
	const posts = getEntityRecords( 'postType', 'post', postsListQuery );

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
		postsList: ! Array.isArray( posts )
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
