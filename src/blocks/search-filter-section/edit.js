/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;
const { withSelect } = wp.data;

function SearchFilterSectionEdit( {
	className,
	hasChildBlocks,
} ) {
	return (
		<div className={ className } aria-live="off">
			<InnerBlocks
				templateLock={ false }
				renderAppender={ (
					hasChildBlocks ?
						undefined :
						() => <InnerBlocks.ButtonBlockAppender />
				) }
			/>
		</div>
	);
}

export default withSelect( ( select, ownProps ) => {
	const { clientId } = ownProps;
	const { getBlockOrder } = select( 'core/block-editor' );

	return {
		hasChildBlocks: getBlockOrder( clientId ).length > 0,
	};
} )( SearchFilterSectionEdit );
