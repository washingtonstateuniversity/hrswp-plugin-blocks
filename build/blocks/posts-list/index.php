<?php
/**
 * Server-side rendering of the `hrswp/posts-list` block.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\PostsList;

/**
 * Registers and renders the `hrswp/posts-list` block
 *
 * @since 0.5.0
 */
class PostsList {
	/**
	 * The excerpt length set by the `hrswp/posts-list` block.
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
		$this->register();
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

			$list_items_markup .= '<div class="wp-block-hrswp-posts-list--list-item">';

			if ( $attributes['displayFeaturedImage'] && has_post_thumbnail( $post ) ) {
				$image_style = '';
				if ( isset( $attributes['featuredImageSizeWidth'] ) ) {
					$image_style .= sprintf( 'max-width:%spx;', $attributes['featuredImageSizeWidth'] );
				}
				if ( isset( $attributes['featuredImageSizeHeight'] ) ) {
					$image_style .= sprintf( 'max-height:%spx;', $attributes['featuredImageSizeHeight'] );
				}

				$image_classes = 'wp-block-hrswp-posts-list--featured-image';
				if ( isset( $attributes['featuredImageSizeSlug'] ) ) {
					$image_classes .= ' size-' . $attributes['featuredImageSizeSlug'];
				}
				if ( isset( $attributes['featuredImageAlign'] ) ) {
					$image_classes .= ' align' . $attributes['featuredImageAlign'];
				}

				$list_items_markup .= sprintf(
					'<figure class="%1$s">%2$s</figure>',
					$image_classes,
					get_the_post_thumbnail(
						$post,
						$attributes['featuredImageSizeSlug'],
						array(
							'style' => $image_style,
						)
					)
				);
			}

			$list_items_markup .= '<div class="wp-block-hrswp-posts-list--body">';

			$title = get_the_title( $post );
			if ( ! $title ) {
				$title = __( '(no title)', 'hrswp-blocks' );
			}
			$list_items_markup .= sprintf(
				'<h3 class="wp-block-hrswp-posts-list--heading"><a href="%1$s">%2$s</a></h3>',
				esc_url( get_permalink( $post ) ),
				$title
			);

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'excerpt' === $attributes['displayPostContentRadio'] ) {

				$trimmed_excerpt = get_the_excerpt( $post );

				$list_items_markup .= sprintf(
					'<p class="wp-block-hrswp-posts-list--post-excerpt">%1$s</p>',
					$trimmed_excerpt
				);
			}

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'full_post' === $attributes['displayPostContentRadio'] ) {
				$list_items_markup .= sprintf(
					'<div class="wp-block-hrswp-posts-list--post-full-content">%1$s</div>',
					wp_kses_post( html_entity_decode( $post->post_content, ENT_QUOTES, get_option( 'blog_charset' ) ) )
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
							'<p class="wp-block-hrswp-posts-list--%1$s-list"><span>%2$s: </span>',
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
							'<p class="wp-block-hrswp-posts-list--%1$s-list"><span>%2$s: </span>',
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
								'<p class="wp-block-hrswp-posts-list--%1$s-list"><span>%2$s: </span>',
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
					'<p class="wp-block-hrswp-posts-list--post-date">%1$s <time datetime="%2$s">%3$s</time></p>',
					__( 'Published on', 'hrswp-blocks' ),
					esc_attr( get_the_date( 'c', $post ) ),
					esc_html( get_the_date( '', $post ) )
				);
			}

			if ( '' !== $post_meta_markup ) {
				$list_items_markup .= sprintf(
					'<div class="wp-block-hrswp-posts-list--meta">%1$s</div>',
					$post_meta_markup
				);
			}

			$list_items_markup .= "</div></div>\n";
		}

		remove_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 20 );

		$class = array( 'wp-block-hrswp-posts-list' );

		if ( isset( $attributes['displayFeaturedImage'] ) && $attributes['displayFeaturedImage'] ) {
			$class[] = 'has-feature-image';
		}

		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$class[] = 'has-date';
		}

		if ( isset( $attributes['align'] ) ) {
			$class[] = 'align' . $attributes['align'];
		}

		if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
			$class[] = 'is-grid';
		}

		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$class[] = 'columns-' . $attributes['columns'];
		}

		if (
			isset( $attributes['displayPostContent'] )
			&& $attributes['displayPostContent']
			&& isset( $attributes['displayPostContentRadio'] )
		) {
			if ( 'full_post' === $attributes['displayPostContentRadio'] ) {
				$class[] = 'has-full-content';
			} elseif ( 'excerpt' === $attributes['displayPostContentRadio'] ) {
				$class[] = 'has-excerpt';
			}
		}

		if ( isset( $attributes['className'] ) ) {
			$class[] = $attributes['className'];
		}

		return sprintf(
			'<div class="%1$s">%2$s</div>',
			esc_attr( implode( ' ', $class ) ),
			$list_items_markup
		);
	}

	/**
	 * Registers the `hrswp/posts-list` block on the server.
	 */
	public function register() {
		/* translators: Maximum number of words in a post excerpt. */
		$excerpt_length = intval( _x( '55', 'excerpt_length', 'hrswp-blocks' ) );
		$excerpt_length = (int) apply_filters( 'excerpt_length', $excerpt_length );

		$post_to_show = (int) get_option( 'posts_per_page', 5 );

		register_block_type(
			'hrswp/posts-list',
			array(
				'attributes'      => array(
					'align'                   => array(
						'type' => 'string',
						'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
					),
					'className'               => array(
						'type' => 'string',
					),
					'selectedTermLists'       => array(
						'type' => 'object',
					),
					'postsToShow'             => array(
						'type'    => 'number',
						'default' => $post_to_show,
					),
					'displayPostContent'      => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostContentRadio' => array(
						'type'    => 'string',
						'default' => 'excerpt',
					),
					'excerptLength'           => array(
						'type'    => 'number',
						'default' => $excerpt_length,
					),
					'displayPostDate'         => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostCategory'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostTag'          => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayPostTaxonomy'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'postLayout'              => array(
						'type'    => 'string',
						'default' => 'list',
					),
					'columns'                 => array(
						'type'    => 'number',
						'default' => 3,
					),
					'order'                   => array(
						'type'    => 'string',
						'default' => 'desc',
					),
					'orderBy'                 => array(
						'type'    => 'string',
						'default' => 'date',
					),
					'displayFeaturedImage'    => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'featuredImageAlign'      => array(
						'type' => 'string',
						'enum' => array( 'left', 'center', 'right' ),
					),
					'featuredImageSizeSlug'   => array(
						'type'    => 'string',
						'default' => 'thumbnail',
					),
					'featuredImageSizeWidth'  => array(
						'type'    => 'number',
						'default' => null,
					),
					'featuredImageSizeHeight' => array(
						'type'    => 'number',
						'default' => null,
					),
				),
				'render_callback' => array( $this, 'render' ),
			)
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
function load() {
	return new PostsList();
}
add_action( 'init', __NAMESPACE__ . '\load', 25 );
