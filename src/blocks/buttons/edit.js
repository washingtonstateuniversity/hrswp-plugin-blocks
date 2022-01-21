/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	useBlockProps,
	useInnerBlocksProps,
	store: blockEditorStore,
} = wp.blockEditor;
const { useSelect } = wp.data;

/**
 * Internal dependencies
 */
import { name as buttonBlockName } from '../button';

const ALLOWED_BLOCKS = [ buttonBlockName ];

function ButtonsEdit( props ) {
	const {
		attributes: { layout = {} },
		className,
	} = props;
	const { orientation, justifyContent } = layout;

	const wrapperClasses = classnames( className, {
		[ `is-content-justification-${ justifyContent }` ]: justifyContent,
		[ `is-vertical` ]: orientation,
	} );

	const blockProps = useBlockProps( { className: wrapperClasses } );

	const preferredStyle = useSelect( ( select ) => {
		const preferredStyleVariations = select(
			blockEditorStore
		).getSettings().__experimentalPreferredStyleVariations;
		return preferredStyleVariations?.value?.[ buttonBlockName ];
	}, [] );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: [
			[
				buttonBlockName,
				{ className: preferredStyle && `is-style-${ preferredStyle }` },
			],
		],
		__experimentalLayout: layout,
		templateInsertUpdatesSelection: true,
	} );

	return (
		<>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default ButtonsEdit;
