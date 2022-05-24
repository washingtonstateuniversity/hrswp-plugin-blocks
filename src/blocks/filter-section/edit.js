/**
 * WordPress dependencies
 */
const { sprintf, __ } = wp.i18n;
const { useSelect } = wp.data;
const {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store: blockEditorStore,
} = wp.blockEditor;

function SearchFilterSectionEdit( { clientId } ) {
	const { searchSectionIds, hasChildBlocks } = useSelect(
		( select ) => {
			const { getBlockOrder, getBlockRootClientId } =
				select( blockEditorStore );

			const rootId = getBlockRootClientId( clientId );

			return {
				hasChildBlocks: getBlockOrder( clientId ).length > 0,
				searchSectionIds: getBlockOrder( rootId ),
			};
		},
		[ clientId ]
	);

	const blockProps = useBlockProps();

	const sectionsCount = searchSectionIds.length;
	const currentSectionPosition = searchSectionIds.indexOf( clientId ) + 1;

	const label = sprintf(
		/* translators: 1: Block label (i.e. "Block: Search Filter"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
		__( '%1$s (%2$s of %3$s)' ),
		blockProps[ 'aria-label' ],
		currentSectionPosition,
		sectionsCount
	);

	const innerBlocksProps = useInnerBlocksProps(
		{ ...blockProps, 'aria-label': label },
		{
			templateLock: false,
			renderAppender: hasChildBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	return <div { ...innerBlocksProps } />;
}

export default SearchFilterSectionEdit;
