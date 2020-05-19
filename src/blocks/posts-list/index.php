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
		$has_categories = isset( $attributes['categories'] ) && ! empty( $attributes['categories'] );
		$has_hrs_units  = isset( $attributes['hrsUnits'] ) && ! empty( $attributes['hrsUnits'] );
		if ( $has_categories && $has_hrs_units ) {
			$args['tax_query'] = array(
				'relation' => 'AND',
				array(
					'taxonomy' => 'category',
					'field'    => 'id',
					'terms'    => array_column( $attributes['categories'], 'id' ),
				),
				array(
					'taxonomy' => 'hrs_unit',
					'field'    => 'id',
					'terms'    => array_column( $attributes['hrsUnits'], 'id' ),
				),
			);
		} else {
			if ( $has_categories ) {
				$args['category__in'] = array_column( $attributes['categories'], 'id' );
			}

			if ( $has_hrs_units ) {
				$args['tax_query'] = array(
					array(
						'taxonomy' => 'hrs_unit',
						'field'    => 'id',
						'terms'    => array_column( $attributes['hrsUnits'], 'id' ),
					),
				);
			}
		}
		// phpcs:enable WordPress.DB.SlowDBQuery.slow_db_query_tax_query

		$posts = get_posts( $args );

		$list_items_markup = '';

		foreach ( $posts as $post ) {

			$list_items_markup .= '<li>';

			if ( $attributes['displayFeaturedImage'] && has_post_thumbnail( $post ) ) {
				$image_style = '';
				if ( isset( $attributes['featuredImageSizeWidth'] ) ) {
					$image_style .= sprintf( 'max-width:%spx;', $attributes['featuredImageSizeWidth'] );
				}
				if ( isset( $attributes['featuredImageSizeHeight'] ) ) {
					$image_style .= sprintf( 'max-height:%spx;', $attributes['featuredImageSizeHeight'] );
				}

				$image_classes = 'wp-block-latest-posts__featured-image';
				if ( isset( $attributes['featuredImageAlign'] ) ) {
					$image_classes .= ' align' . $attributes['featuredImageAlign'];
				}

				$list_items_markup .= sprintf(
					'<div class="%1$s">%2$s</div>',
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

			$title = get_the_title( $post );
			if ( ! $title ) {
				$title = __( '(no title)', 'hrswp-blocks' );
			}
			$list_items_markup .= sprintf(
				'<a href="%1$s">%2$s</a>',
				esc_url( get_permalink( $post ) ),
				$title
			);

			if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
				$list_items_markup .= sprintf(
					'<time datetime="%1$s" class="wp-block-latest-posts__post-date">%2$s</time>',
					esc_attr( get_the_date( 'c', $post ) ),
					esc_html( get_the_date( '', $post ) )
				);
			}

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'excerpt' === $attributes['displayPostContentRadio'] ) {

				$trimmed_excerpt = get_the_excerpt( $post );

				$list_items_markup .= sprintf(
					'<div class="wp-block-latest-posts__post-excerpt">%1$s</div>',
					$trimmed_excerpt
				);
			}

			if ( isset( $attributes['displayPostContent'] ) && $attributes['displayPostContent']
				&& isset( $attributes['displayPostContentRadio'] ) && 'full_post' === $attributes['displayPostContentRadio'] ) {
				$list_items_markup .= sprintf(
					'<div class="wp-block-latest-posts__post-full-content">%1$s</div>',
					wp_kses_post( html_entity_decode( $post->post_content, ENT_QUOTES, get_option( 'blog_charset' ) ) )
				);
			}

			$list_items_markup .= "</li>\n";
		}

		remove_filter( 'excerpt_length', array( $this, 'get_excerpt_length' ), 20 );

		$class = 'wp-block-latest-posts wp-block-latest-posts__list';
		if ( isset( $attributes['align'] ) ) {
			$class .= ' align' . $attributes['align'];
		}

		if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
			$class .= ' is-grid';
		}

		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$class .= ' columns-' . $attributes['columns'];
		}

		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$class .= ' has-dates';
		}

		if ( isset( $attributes['className'] ) ) {
			$class .= ' ' . $attributes['className'];
		}

		return sprintf(
			'<ul class="%1$s">%2$s</ul>',
			esc_attr( $class ),
			$list_items_markup
		);
	}

	/**
	 * Registers the `hrswp/posts-list` block on the server.
	 */
	public function register() {
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
					'categories'              => array(
						'type'  => 'array',
						'items' => array( 'type' => 'object' ),
					),
					'hrsUnits'                => array(
						'type'  => 'array',
						'items' => array( 'type' => 'object' ),
					),
					'postsToShow'             => array(
						'type'    => 'number',
						'default' => 5,
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
						'default' => 55,
					),
					'displayPostDate'         => array(
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
