/**
 * External dependencies
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, RawHTML } = wp.element;
const {
	BaseControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	Spinner,
	ToggleControl,
	ToolbarGroup,
} = wp.components;
const apiFetch = wp.apiFetch;
const { addQueryArgs } = wp.url;
const { __ } = wp.i18n;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	__experimentalImageSizeControl,
} = wp.blockEditor;
const { withSelect } = wp.data;
const { pin, list, grid } = wp.icons;

/**
 * Internal dependencies
 */
import {
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POST_COLUMNS,
	TAXONOMIES_LIST_QUERY,
} from './constants';

class PostsListEdit extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			categoriesList: [],
			hrsUnitsList: [],
		};
	}

	componentDidMount() {
		this.isStillMounted = true;
		this.fetchCategoriesRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/categories`, TAXONOMIES_LIST_QUERY ),
		} )
			.then( ( categoriesList ) => {
				if ( this.isStillMounted ) {
					this.setState( { categoriesList } );
				}
			} )
			.catch( () => {
				if ( this.isStillMounted ) {
					this.setState( { categoriesList: [] } );
				}
			} );

		this.fetchUnitsRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/hrs_unit`, TAXONOMIES_LIST_QUERY ),
		} )
			.then( ( hrsUnitsList ) => {
				if ( this.isStillMounted ) {
					this.setState( { hrsUnitsList } );
				}
			} )
			.catch( () => {
				if ( this.isStillMounted ) {
					this.setState( { hrsUnitsList: [] } );
				}
			} );
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		const {
			attributes,
			setAttributes,
			imageSizeOptions,
			latestPosts,
			defaultImageWidth,
			defaultImageHeight,
		} = this.props;
		const { categoriesList, hrsUnitsList } = this.state;
		const {
			displayFeaturedImage,
			displayPostContentRadio,
			displayPostContent,
			displayPostDate,
			postLayout,
			columns,
			order,
			orderBy,
			includeCategories,
			includeUnits,
			postsToShow,
			excerptLength,
			featuredImageAlign,
			featuredImageSizeSlug,
			featuredImageSizeWidth,
			featuredImageSizeHeight,
		} = attributes;
		const categorySuggestions = categoriesList.reduce(
			( accumulator, category ) => ( {
				...accumulator,
				[ category.name ]: category,
			} ),
			{}
		);
		const hrsUnitSuggestions = hrsUnitsList.reduce(
			( accumulator, hrsUnit ) => ( {
				...accumulator,
				[ hrsUnit.name ]: hrsUnit,
			} ),
			{}
		);
		const selectCategories = ( tokens ) => {
			const hasNoSuggestion = tokens.some(
				( token ) =>
					typeof token === 'string' && ! categorySuggestions[ token ]
			);
			if ( hasNoSuggestion ) {
				return;
			}
			// Categories that are already will be objects, while new additions will be strings (the name).
			// allCategories nomalizes the array so that they are all objects.
			const allCategories = tokens.map( ( token ) => {
				return typeof token === 'string'
					? categorySuggestions[ token ]
					: token;
			} );
			// We do nothing if the category is not selected from suggestions.
			if ( includes( allCategories, null ) ) {
				return false;
			}
			setAttributes( { includeCategories: allCategories } );
		};
		const selectHrsUnits = ( tokens ) => {
			const hasNoSuggestion = tokens.some(
				( token ) =>
					typeof token === 'string' && ! hrsUnitSuggestions[ token ]
			);
			if ( hasNoSuggestion ) {
				return;
			}
			// Units that are already will be objects, while new additions will be strings (the name).
			// allUnits nomalizes the array so that they are all objects.
			const allUnits = tokens.map( ( token ) => {
				return typeof token === 'string'
					? hrsUnitSuggestions[ token ]
					: token;
			} );
			// We do nothing if the unit is not selected from suggestions.
			if ( includes( allUnits, null ) ) {
				return false;
			}
			setAttributes( { includeUnits: allUnits } );
		};

		const inspectorControls = (
			<InspectorControls>
				{ console.log( includeUnits ) /* @DEBUG just testing */ }
				<PanelBody title={ __( 'Post content settings' ) }>
					<ToggleControl
						label={ __( 'Post content' ) }
						checked={ displayPostContent }
						onChange={ ( value ) =>
							setAttributes( { displayPostContent: value } )
						}
					/>
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
					{ /* @todo, add option for display unit */ }
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

				<PanelBody title={ __( 'Sorting and Filtering' ) }>
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
						categorySuggestions={ categorySuggestions }
						onCategoryChange={ selectCategories }
						selectedCategories={ includeCategories }
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
									? MAX_POST_COLUMNS
									: Math.min(
											MAX_POST_COLUMNS,
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
					<Placeholder icon={ pin } label={ __( 'Posts list' ) }>
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
					className={ classnames( this.props.className, {
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
								{ /* translators: excerpt truncation character, default … */ }
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
									rel="noopener noreferrer"
								>
									{ titleTrimmed ? (
										<RawHTML>{ titleTrimmed }</RawHTML>
									) : (
										__( 'No title' )
									) }
								</a>
								{ displayPostDate && post.date_gmt && (
									<time
										dateTime={ format(
											'c',
											post.date_gmt
										) }
										className="wp-block-latest-posts_post-date"
									>
										{ dateI18n(
											dateFormat,
											post.date_gmt
										) }
									</time>
								) }
								{ displayPostContent &&
									displayPostContentRadio === 'excerpt' && (
										<div className="wp-block-latest-posts_post-excerpt">
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
		includeCategories,
		includeUnits,
	} = props.attributes;
	const { getEntityRecords, getMedia } = select( 'core' );
	const { getSettings } = select( 'core/block-editor' );
	const { imageSizes, imageDimensions } = getSettings();
	const catIds =
		includeCategories && includeCategories.length > 0
			? includeCategories.map( ( cat ) => cat.id )
			: [];
	const unitIds =
		includeUnits && includeUnits.length > 0
			? includeUnits.map( ( unit ) => unit.id )
			: [];
	const latestPostsQuery = pickBy(
		{
			categories: catIds,
			unitIds,
			order,
			orderby: orderBy,
			per_page: postsToShow,
		},
		( value ) => ! isUndefined( value )
	);

	const posts = getEntityRecords( 'postType', 'post', latestPostsQuery );
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
