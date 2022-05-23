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
import {
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
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	__experimentalImageSizeControl as ImageSizeControl,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { pin, list, grid } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import { PostMeta } from './post-meta';
import {
	MIN_EXCERPT_LENGTH,
	MAX_EXCERPT_LENGTH,
	MAX_POSTS_COLUMNS,
	TERMS_LIST_QUERY,
	taxonomyListToIds,
} from './shared';

function getFeaturedImageDetails(post, size) {
	const image = get(post, ['_embedded', 'wp:featuredmedia', '0']);

	return {
		url:
			image?.media_details?.sizes?.[size]?.source_url ??
			image?.source_url,
		alt: image?.alt_text,
	};
}

export default function PostsListEdit({ attributes, setAttributes }) {
	const {
		addLinkToFeaturedImage,
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
	const {
		imageSizes,
		postsList,
		defaultImageWidth,
		defaultImageHeight,
		termLists,
		taxonomies,
	} = useSelect(
		(select) => {
			const { getEntityRecords, getTaxonomies } = select(coreStore);
			const settings = select(blockEditorStore).getSettings();

			const postsListQuery = pickBy(
				{
					order,
					orderby: orderBy,
					per_page: postsToShow,
					_embed: 'wp:featuredmedia',
				},
				(value) => !isUndefined(value)
			);

			if (!isUndefined(selectedTermLists)) {
				Object.entries(selectedTermLists).forEach(([slug, terms]) => {
					postsListQuery[slug] = terms.map((term) => term.id);
				});
			}

			const allTaxonomies = getTaxonomies(TERMS_LIST_QUERY);
			const taxonomiesList = filter(allTaxonomies, (taxonomy) =>
				includes(taxonomy.types, 'post')
			);
			const terms = {};
			taxonomiesList.forEach(({ slug }) => {
				Object.defineProperty(terms, slug, {
					value: getEntityRecords('taxonomy', slug, TERMS_LIST_QUERY),
				});
			});

			return {
				defaultImageWidth: get(
					settings.imageDimensions,
					[featuredImageSizeSlug, 'width'],
					0
				),
				defaultImageHeight: get(
					settings.imageDimensions,
					[featuredImageSizeSlug, 'height'],
					0
				),
				imageSizes: settings.imageSizes,
				postsList: getEntityRecords('postType', 'post', postsListQuery),
				taxonomies: taxonomiesList,
				termLists: terms,
			};
		},
		[featuredImageSizeSlug, postsToShow, order, orderBy, selectedTermLists]
	);

	const imageSizeOptions = imageSizes
		.filter(({ slug }) => slug !== 'full')
		.map(({ name, slug }) => ({
			value: slug,
			label: name,
		}));
	const selectTaxonomyTerms = (taxonomy, term) => {
		const allTerms = selectedTermLists ?? {};
		const taxonomyTerms = allTerms[taxonomy] ?? (allTerms[taxonomy] = []);
		const hasTerm = includes(
			taxonomyListToIds(allTerms, taxonomy),
			term.id
		);

		const newTerms = hasTerm
			? remove(taxonomyTerms, (value) => {
					return value.id !== term.id;
			  })
			: [...taxonomyTerms, term];

		allTerms[taxonomy] = newTerms;

		setAttributes({ selectedTermLists: allTerms });
	};

	const hasPosts = !!postsList?.length;
	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={__('Post content settings')}>
				<ToggleControl
					label={__('Post content')}
					checked={displayPostContent}
					onChange={(value) =>
						setAttributes({ displayPostContent: value })
					}
				/>
				{displayPostContent && (
					<RadioControl
						label={__('Show:')}
						selected={displayPostContentRadio}
						options={[
							{ label: __('Excerpt'), value: 'excerpt' },
							{
								label: __('Full post'),
								value: 'full_post',
							},
						]}
						onChange={(value) =>
							setAttributes({
								displayPostContentRadio: value,
							})
						}
					/>
				)}
				{displayPostContent &&
					displayPostContentRadio === 'excerpt' && (
						<RangeControl
							label={__('Max number of words in excerpt')}
							value={excerptLength}
							onChange={(value) =>
								setAttributes({ excerptLength: value })
							}
							min={MIN_EXCERPT_LENGTH}
							max={MAX_EXCERPT_LENGTH}
						/>
					)}
			</PanelBody>

			<PanelBody title={__('Post meta settings')}>
				<ToggleControl
					label={__('Display post date')}
					checked={displayPostDate}
					onChange={(value) =>
						setAttributes({ displayPostDate: value })
					}
				/>
				<ToggleControl
					label={__('Display post category')}
					checked={displayPostCategory}
					onChange={(value) =>
						setAttributes({ displayPostCategory: value })
					}
				/>
				<ToggleControl
					label={__('Display post tag')}
					checked={displayPostTag}
					onChange={(value) =>
						setAttributes({ displayPostTag: value })
					}
				/>
				<ToggleControl
					label={__('Display post taxonomy')}
					checked={displayPostTaxonomy}
					onChange={(value) =>
						setAttributes({ displayPostTaxonomy: value })
					}
				/>
			</PanelBody>

			<PanelBody title={__('Featured image settings')}>
				<ToggleControl
					label={__('Display featured image')}
					checked={displayFeaturedImage}
					onChange={(value) =>
						setAttributes({ displayFeaturedImage: value })
					}
				/>
				{displayFeaturedImage && (
					<>
						<ImageSizeControl
							onChange={(value) => {
								const newAttrs = {};
								if (value.hasOwnProperty('width')) {
									newAttrs.featuredImageSizeWidth =
										value.width;
								}
								if (value.hasOwnProperty('height')) {
									newAttrs.featuredImageSizeHeight =
										value.height;
								}
								setAttributes(newAttrs);
							}}
							slug={featuredImageSizeSlug}
							width={featuredImageSizeWidth}
							height={featuredImageSizeHeight}
							imageWidth={defaultImageWidth}
							imageHeight={defaultImageHeight}
							imageSizes={imageSizeOptions}
							imageSizeOptions={imageSizeOptions}
							onChangeImage={(value) =>
								setAttributes({
									featuredImageSizeSlug: value,
									featuredImageSizeWidth: undefined,
									featuredImageSizeHeight: undefined,
								})
							}
						/>
						<BaseControl className="editor-latest-posts-image-alignment-control">
							<BaseControl.VisualLabel>
								{__('Image alignment')}
							</BaseControl.VisualLabel>
							<BlockAlignmentToolbar
								value={featuredImageAlign}
								onChange={(value) =>
									setAttributes({
										featuredImageAlign: value,
									})
								}
								controls={['left', 'center', 'right']}
								isCollapsed={false}
							/>
						</BaseControl>
						<ToggleControl
							label={__('Add link to featured image')}
							checked={addLinkToFeaturedImage}
							onChange={(value) =>
								setAttributes({
									addLinkToFeaturedImage: value,
								})
							}
						/>
					</>
				)}
			</PanelBody>

			<PanelBody
				className={'taxonomy-filter'}
				title={__('Filtering')}
				initialOpen={false}
			>
				{taxonomies.map((taxonomy) => (
					<PanelBody
						className={'taxonomy-filter--body'}
						key={taxonomy.slug}
						title={taxonomy.name}
						initialOpen={false}
					>
						<ul className="edit__checklist">
							{termLists[taxonomy.slug] &&
								termLists[taxonomy.slug].map((term) => (
									<li
										key={term.id}
										className="components-checkbox-control__label"
									>
										<CheckboxControl
											label={term.name}
											checked={includes(
												taxonomyListToIds(
													selectedTermLists,
													taxonomy.rest_base
												),
												term.id
											)}
											onChange={() => {
												selectTaxonomyTerms(
													taxonomy.rest_base,
													term
												);
											}}
										/>
									</li>
								))}
						</ul>
					</PanelBody>
				))}
			</PanelBody>

			<PanelBody title={__('Order and number')} initialOpen={false}>
				<QueryControls
					{...{ order, orderBy }}
					numberOfItems={postsToShow}
					onOrderChange={(value) => setAttributes({ order: value })}
					onOrderByChange={(value) =>
						setAttributes({ orderBy: value })
					}
					onNumberOfItemsChange={(value) =>
						setAttributes({ postsToShow: value })
					}
				/>

				{postLayout === 'grid' && (
					<RangeControl
						label={__('Columns')}
						value={columns}
						onChange={(value) => setAttributes({ columns: value })}
						min={2}
						max={
							!hasPosts
								? MAX_POSTS_COLUMNS
								: Math.min(MAX_POSTS_COLUMNS, postsList.length)
						}
						required
					/>
				)}
			</PanelBody>
		</InspectorControls>
	);

	const blockProps = useBlockProps({
		className: classnames({
			'hrswp-block-posts-list': true,
			'is-grid': postLayout === 'grid',
			'has-feature-image': displayFeaturedImage,
			'has-date': displayPostDate,
			'has-full-content':
				displayPostContent && displayPostContentRadio === 'full_post',
			'has-excerpt':
				displayPostContent && displayPostContentRadio === 'excerpt',
			[`columns-${columns}`]: postLayout === 'grid',
		}),
	});

	if (!hasPosts) {
		return (
			<div {...blockProps}>
				{inspectorControls}
				<Placeholder icon={pin} label={__('Posts')}>
					{!Array.isArray(postsList) ? (
						<Spinner />
					) : (
						__('No posts found.')
					)}
				</Placeholder>
			</div>
		);
	}

	// Removing posts from display should be instant.
	const displayPosts =
		postsList.length > postsToShow
			? postsList.slice(0, postsToShow)
			: postsList;

	const layoutControls = [
		{
			icon: list,
			title: __('List view'),
			onClick: () => setAttributes({ postLayout: 'list' }),
			isActive: postLayout === 'list',
		},
		{
			icon: grid,
			title: __('Grid view'),
			onClick: () => setAttributes({ postLayout: 'grid' }),
			isActive: postLayout === 'grid',
		},
	];

	return (
		<>
			{inspectorControls}
			<BlockControls>
				<ToolbarGroup controls={layoutControls} />
			</BlockControls>
			<ul {...blockProps}>
				{displayPosts.map((post, i) => {
					const titleTrimmed = invoke(post, [
						'title',
						'rendered',
						'trim',
					]);
					let excerpt = post.content.rendered;
					const excerptElement = document.createElement('div');
					excerptElement.innerHTML = excerpt;

					excerpt =
						excerptElement.textContent ||
						excerptElement.innerText ||
						'';

					const { url: imageSourceUrl, alt: featuredImageAlt } =
						getFeaturedImageDetails(post, featuredImageSizeSlug);
					const imageClasses = classnames({
						'hrswp-block-posts-list__featured-image': true,
						[`align${featuredImageAlign}`]: !!featuredImageAlign,
					});
					const renderFeaturedImage =
						displayFeaturedImage && imageSourceUrl;
					const featuredImage = renderFeaturedImage && (
						<img
							src={imageSourceUrl}
							alt={featuredImageAlt}
							style={{
								maxWidth: featuredImageSizeWidth,
								maxHeight: featuredImageSizeHeight,
							}}
						/>
					);

					const hasPostMeta =
						displayPostDate ||
						displayPostCategory ||
						displayPostTag ||
						displayPostTaxonomy;

					const needsReadMore =
						excerptLength < excerpt.trim().split(' ').length &&
						post.excerpt.raw === '';

					const postExcerpt = needsReadMore ? (
						<>
							{excerpt.trim().split(' ', excerptLength).join(' ')}
							{/* translators: excerpt truncation character, default …  */}
							{__(' … ')}
						</>
					) : (
						excerpt
					);

					return (
						<li
							className="hrswp-block-posts-list__list-item"
							key={i}
						>
							{renderFeaturedImage && (
								<div className={imageClasses}>
									{addLinkToFeaturedImage ? (
										<a
											href={post.link}
											rel="noreferrer noopener"
										>
											{featuredImage}
										</a>
									) : (
										featuredImage
									)}
								</div>
							)}
							<div className="hrswp-block-posts-list__body">
								<a
									className="hrswp-block-posts-list__post-title"
									href={post.link}
									rel="noreferrer noopener"
									dangerouslySetInnerHTML={
										!!titleTrimmed
											? {
													__html: titleTrimmed,
											  }
											: undefined
									}
								>
									{!titleTrimmed ? __('(no title)') : null}
								</a>
								{displayPostContent &&
									displayPostContentRadio === 'excerpt' && (
										<p className="hrswp-block-posts-list__post-excerpt">
											{postExcerpt}
										</p>
									)}
								{displayPostContent &&
									displayPostContentRadio === 'full_post' && (
										<div
											className="hrswp-block-posts-list__post-full-content"
											dangerouslySetInnerHTML={{
												__html: post.content.raw.trim(),
											}}
										/>
									)}
								{hasPostMeta && (
									<PostMeta
										displayPostCategory={
											displayPostCategory
										}
										displayPostDate={displayPostDate}
										displayPostTag={displayPostTag}
										displayPostTaxonomy={
											displayPostTaxonomy
										}
										post={post}
										taxonomies={taxonomies}
										termLists={termLists}
									/>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
