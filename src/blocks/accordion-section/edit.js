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

function AccordionEdit({ attributes: { level }, clientId }) {
	const { accordionsIds, hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockOrder, getBlockRootClientId } =
				select(blockEditorStore);

			const rootId = getBlockRootClientId(clientId);

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 1,
				accordionsIds: getBlockOrder(rootId),
			};
		},
		[clientId]
	);

	const blockProps = useBlockProps();

	const panelsCount = accordionsIds.length;
	const currentPanelPosition = accordionsIds.indexOf(clientId) + 1;

	const label = sprintf(
		/* translators: 1: Block label (i.e. "Block: Accordion"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
		__('%1$s (%2$s of %3$s)'),
		blockProps['aria-label'],
		currentPanelPosition,
		panelsCount
	);

	const innerBlocksProps = useInnerBlocksProps(
		{ ...blockProps, 'aria-label': label },
		{
			template: [['hrswp/accordion-heading', { level }]],
			templateLock: false,
			renderAppender: hasChildBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	return (
		<>
			<div {...innerBlocksProps} />
		</>
	);
}

export default AccordionEdit;
