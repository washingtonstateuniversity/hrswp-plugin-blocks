<?php
/**
 * Server-side rendering of the `hrswp/list-awards` block.
 *
 * @package HRSWP_Blocks
 */

namespace HRSWP\Blocks\ListAwards;

/**
 * Renders the `hrswp/list-awards` dynamic block contents.
 *
 * Displays the employee recognition awards data for whichever data source has been selected.
 *
 * @since 3.2.0
 *
 * @param array $attributes The block attributes passed from `register_block_type`.
 * @return string The formatted HTML to display.
 */
function render( $attributes ) {
	$classes = array();

	if ( isset( $attributes['align'] ) ) {
		$classes[] = 'align' . $attributes['align'];
	}
	if ( isset( $attributes['className'] ) ) {
		$classes[] = $attributes['className'];
	}
	if ( isset( $attributes['columns'] ) && 0 < $attributes['columns'] ) {
		$classes[] = "has-{$attributes['columns']}-columns";
	}
	if ( isset( $attributes['imageCrop'] ) && true === $attributes['imageCrop'] ) {
		$classes[] = 'is-cropped';
	}

	$classes = implode( ' ', $classes );

	// Get the saved attachments.
	$attachments = get_children(
		array(
			'post_parent'    => get_the_ID(),
			'post_type'      => 'attachment',
			'posts_per_page' => -1,
			'orderby'        => 'meta_value_num',
			'meta_key'       => '_hrswp_sqlsrv_db_award_group', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
			'order'          => 'ASC',
		)
	);

	$groups = array_values(
		array_unique(
			array_map( __NAMESPACE__ . '\get_group', $attachments )
		)
	);

	$display = '';
	foreach ( $groups as $group ) {
		$group_display = '';

		foreach ( $attachments as $attachment ) {
			$award_group = get_post_meta( $attachment->ID, '_hrswp_sqlsrv_db_award_group' );
			$award_group = ( '-1' === $award_group[0] ) ? 'All' : $award_group[0];

			if ( $award_group === $group ) {
				$group_display .= sprintf(
					'<div class="award-item"><figure class="wp-block-image size-small">%1$s</figure><p class="award-title">%2$s</p><p class="award-description">%3$s</p><p class="award-meta">%4$s Years</p></div>',
					wp_get_attachment_image( $attachment->ID, 'small' ),
					esc_html( $attachment->post_title ),
					$attachment->post_content,
					$award_group
				);
			}
		}

		$display .= sprintf(
			'<h2>%2$s Years</h2><div class="%1$s-year-group awards-list">%3$s</a></div>',
			strtolower( esc_attr( $group ) ),
			esc_html( $group ),
			$group_display
		);
	}

	return sprintf(
		'<div class="hrswp-list-awards-block %1$s">%2$s</div>',
		esc_attr( $classes ),
		$display
	);
}

/**
 * Retrieves a group name for a given attachment.
 *
 * @since 0.4.0
 *
 * @param WP_Post $attachment An attachment WP_Post object.
 * @return string The '_hrswp_sqlsrv_db_award_group' meta data value.
 */
function get_group( $attachment ) {
	$group = get_post_meta( $attachment->ID, '_hrswp_sqlsrv_db_award_group' );

	if ( '-1' !== $group[0] ) {
		return implode( '', $group );
	} else {
		return 'All';
	}
}

/**
 * Registers the `hrswp/list-awards` block on the server.
 *
 * @since 0.4.0
 */
function register_block_list_awards() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => __NAMESPACE__ . '\render',
		)
	);
}
// Use later priority to make sure required resources are ready.
add_action( 'init', __NAMESPACE__ . '\register_block_list_awards', 25 );
