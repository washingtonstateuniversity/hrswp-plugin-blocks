/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

export default function save( { className } ) {
	return (
		<div className={ className } data-accordion-block>
			<div className="wp-block-buttons controls">
				<div className="wp-block-button is-style-outline">
					<button
						id="open-all-panels"
						className="wp-block-button__link"
					>
						Open all
					</button>
				</div>
				<div className="wp-block-button is-style-outline">
					<button
						id="close-all-panels"
						className="wp-block-button__link"
					>
						Close All
					</button>
				</div>
			</div>
			<InnerBlocks.Content />
		</div>
	);
}
