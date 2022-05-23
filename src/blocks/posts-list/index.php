<?php
/**
 * Server-side rendering of the `hrswp/posts-list` block.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\PostsList;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


/**
 * Registers and renders the `hrswp/posts-list` block
 *
 * Uses a class in order to get around having to override `excerpt_length`
 * using a global variable.
 *
 * @since 0.5.0
 */
class PostsList {
	/**
	 * The excerpt length for the Posts List block.
	 *
	 * @since 0.5.0
	 * @var int
	 */
	public $excerpt_length = 0;

	/**
	 * Initializes the `PostsList` class.
	 *
	 * @since 0.5.0
	 */
	public function __construct() {
		register_block_type_from_metadata(
			__DIR__,
			array(
				'render_callback' => array( $this, 'render' ),
			)
		);
	}

	/**
	 * Returns the excerpt length set by the `hrswp/posts-list` block.
	 *
	 * @since 0.5.0
	 *
	 * @return int The excerpt length.
	 */
	public function get_excerpt_length() {
		return $this->excerpt_length;
	}

	/**
	 * Renders the `hrswp/posts-list` block on the server.
	 *
	 * @since 0.5.0
	 *
	 * @param array $attributes The block attributes.
	 * @return string Returns a list of posts.
	 */
	public function render( $attributes ) {
		$args = array(
			'posts_per_page'   => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
		);

		$this->excerpt_length = $attributes['excerptLength'];
		add_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 25 );

		// Taxonomy handling.
		// phpcs:disable WordPress.DB.SlowDBQuery.slow_db_query_tax_query
		if ( isset( $attributes['selectedTermLists'] ) && ! empty( $attributes['selectedTermLists'] ) ) {
			// Begin the query.
			$args['tax_query'] = array( 'relation' => 'AND' );

			// Build each query array.
			foreach ( $attributes['selectedTermLists'] as $slug => $terms ) {
				// WP_Query uses some different props than the Rest API \(°-°)/.
				if ( 'categories' === $slug ) {
					$slug = 'category';
				}
				if ( 'tags' === $slug ) {
					$slug = 'post_tag';
				}

				if ( ! empty( $terms ) ) {
					$args['tax_query'][] = array(
						'taxonomy' => $slug,
						'field'    => 'id',
						'terms'    => array_column( $terms, 'id' ),
					);
				}
			}
		}
		// phpcs:enable WordPress.DB.SlowDBQuery.slow_db_query_tax_query

		$posts = get_posts( $args );

		$list_items_markup = '';

		foreach ( $posts as $post ) {
			$post_link = esc_url( get_permalink( $post ) );
			$title     = get_the_title( $post );

			if ( ! $title ) {
				$title = __( '(no title)', 'hrswp-blocks' );
			}

			$list_items_markup .= '<li class="hrswp-block-posts-list__list-item">';

			if ( $attributes['displayFeaturedImage'] && has_post_thumbnail( $post ) ) {
				$image_style = '';
				if ( isset( $attributes['featuredImageSizeWidth'] ) ) {
					$image_style .= 'max-width:' . $attributes['featuredImageSizeWidth'] . 'px;';
				}
				if ( isset( $attributes['featuredImageSizeHeight'] ) ) {
					$image_style .= 'max-height:' . $attributes['featuredImageSizeHeight'] . 'px;';
				}

				$image_classes = 'hrswp-block-posts-list__featured-image';
				if ( isset( $attributes['featuredImageAlign'] ) ) {
					$image_classes .= ' align' . $attributes['featuredImageAlign'];
				}

				$featured_image = get_the_post_thumbnail(
					$post,
					$attributes['featuredImageSizeSlug'],
					array(
						'style' => esc_attr( $image_style ),
					)
				);
				if ( $attributes['addLinkToFeaturedImage'] ) {
					$featured_image = sprintf(
						'<a href="%1$s" aria-label="%2$s">%3$s</a>',
						esc_url( $post_link ),
						esc_attr( $title ),
						$featured_image
					);
				}
				$list_items_markup .= sprintf(
					'<div class="%1$s">%2$s</div>',
					esc_attr( $image_classes ),
					$featured_image
				);
			}

			$list_items_markup .= '<div class="hrswp-block-posts-list__body">';
			$list_items_markup .= sprintf(
				'<a class="hrswp-block-posts-list__post-title" href="%1$s">%2$s</a>',
				esc_url( $post_link ),
				$title
			);

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'excerpt' === $attributes['displayPostContentRadio'] ) {

				$trimmed_excerpt = get_the_excerpt( $post );

				if ( post_password_required( $post ) ) {
					$trimmed_excerpt = __( 'This content is password protected.', 'hrswp-blocks' );
				}

				$list_items_markup .= sprintf(
					'<p class="hrswp-block-posts-list__post-excerpt">%1$s</p>',
					$trimmed_excerpt
				);
			}

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'full_post' === $attributes['displayPostContentRadio'] ) {

				$post_content = html_entity_decode( $post->post_content, ENT_QUOTES, get_option( 'blog_charset' ) );

				if ( post_password_required( $post ) ) {
					$post_content = __( 'This content is password protected.', 'hrswp-blocks' );
				}

				$list_items_markup .= sprintf(
					'<div class="hrswp-block-posts-list__post-full-content">%1$s</div>',
					wp_kses_post( $post_content )
				);
			}

			$post_meta_markup = '';
			if (
				isset( $attributes['displayPostCategory'] ) ||
				isset( $attributes['displayPostTag'] ) ||
				isset( $attributes['displayPostTaxonomy'] )
			) {
				$taxonomy_names = get_object_taxonomies( $post->post_type );

				// Move `post_tags` to the end.
				$taxonomy_names[] = array_splice(
					$taxonomy_names,
					array_search( 'post_tag', $taxonomy_names, true ),
					1
				)[0];

				foreach ( $taxonomy_names as $taxonomy_name ) {
					if (
						'category' === $taxonomy_name &&
						isset( $attributes['displayPostCategory'] ) &&
						$attributes['displayPostCategory']
					) {
						$prefix = sprintf(
							'<p class="hrswp-block-posts-list__%1$s-list"><span>%2$s: </span>',
							esc_attr( $taxonomy_name ),
							__( 'More on', 'hrswp-blocks' )
						);

						$post_meta_markup .= get_the_term_list( $post->ID, $taxonomy_name, $prefix, ', ', '</p>' );
					} elseif (
						'post_tag' === $taxonomy_name &&
						isset( $attributes['displayPostTag'] ) &&
						$attributes['displayPostTag']
					) {
						$prefix = sprintf(
							'<p class="hrswp-block-posts-list__%1$s-list"><span>%2$s: </span>',
							esc_attr( $taxonomy_name ),
							__( 'Tagged', 'hrswp-blocks' )
						);

						$post_meta_markup .= get_the_term_list( $post->ID, $taxonomy_name, $prefix, ', ', '</p>' );
					} else {
						if (
							'post_tag' !== $taxonomy_name &&
							'category' !== $taxonomy_name &&
							isset( $attributes['displayPostTaxonomy'] ) &&
							$attributes['displayPostTaxonomy']
						) {
							$taxonomy_object = get_taxonomy( $taxonomy_name );
							$prefix          = sprintf(
								'<p class="hrswp-block-posts-list__%1$s-list"><span>%2$s: </span>',
								esc_attr( $taxonomy_name ),
								esc_html( $taxonomy_object->labels->singular_name )
							);

							$post_meta_markup .= get_the_term_list( $post->ID, $taxonomy_name, $prefix, ', ', '</p>' );
						}
					}
				}
			}
			if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
				$post_meta_markup .= sprintf(
					'<p class="hrswp-block-posts-list__post-date">%1$s <time datetime="%2$s">%3$s</time></p>',
					__( 'Published on', 'hrswp-blocks' ),
					esc_attr( get_the_date( 'c', $post ) ),
					esc_html( get_the_date( '', $post ) )
				);
			}

			if ( '' !== $post_meta_markup ) {
				$list_items_markup .= sprintf(
					'<div class="hrswp-block-posts-list__meta">%1$s</div>',
					$post_meta_markup
				);
			}

			$list_items_markup .= "</div></li>\n";
		}

		remove_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 20 );

		$class = 'hrswp-block-posts-list';

		if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
			$class .= ' is-grid';
		}

		if ( isset( $attributes['displayFeaturedImage'] ) && $attributes['displayFeaturedImage'] ) {
			$class .= ' has-feature-image';
		}

		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$class .= ' has-date';
		}

		if (
			isset( $attributes['displayPostContent'] )
			&& $attributes['displayPostContent']
			&& isset( $attributes['displayPostContentRadio'] )
		) {
			if ( 'full_post' === $attributes['displayPostContentRadio'] ) {
				$class .= ' has-full-content';
			} elseif ( 'excerpt' === $attributes['displayPostContentRadio'] ) {
				$class .= ' has-excerpt';
			}
		}

		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$class .= ' columns-' . $attributes['columns'];
		}

		$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

		return sprintf(
			'<ul %1$s>%2$s</ul>',
			$wrapper_attributes,
			$list_items_markup
		);
	}
}

/**
 * Creates a new instance of the `PostsList` class.
 *
 * @since 0.5.0
 *
 * @return PostsList An instance of the PostsList class.
 */
add_action(
	'init',
	function() {
		return new PostsList();
	},
	25
);
