/**
 * External dependencies
 */
import { dropRight, times, map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	PanelBody,
	RangeControl,
} = wp.components;
const {
	InspectorControls,
	InnerBlocks,
	RichText,
} = wp.blockEditor;
const { createBlock } = wp.blocks;
const {
	withDispatch,
	useDispatch,
	useSelect,
} = wp.data;

/**
 * The Allowed Blocks.
 *
 * The allowed blocks constant is passed to InnerBlocks as specified here.
 * The only block allowed in the Search Filter block is the Search Filter
 * Section block (hrswp/search-filter-section).
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [
	'hrswp/search-filter-section',
];

const TEMPLATE = [
	[ 'hrswp/search-filter-input' ],
	[ 'hrswp/search-filter-section' ],
];

function SearchFilterEditContainer( {
	className,
	clientId,
	updateSections,
} ) {
	const { count } = useSelect( ( select ) => {
		return {
			count: select( 'core/block-editor' ).getBlockCount( clientId ),
		};
	}, [ clientId ] );

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Sections' ) }
						value={ count }
						onChange={ ( value ) => updateSections( count, value ) }
						min={ 1 }
						max={ 60 }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				<InnerBlocks
					templateLock="all"
					allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		</>
	);
}

const SearchFilterEditContainerWrapper = withDispatch( ( dispatch, ownProps, registry ) => ( {
	/**
	 * Updates the section count, including necessary revisions to child Section
	 * blocks.
	 *
	 * @param {number} previousSections Previous sections count.
	 * @param {number} newSections      New sections count.
	 */
	updateSections( previousSections, newSections ) {
		const { clientId } = ownProps;
		const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
		const { getBlocks } = registry.select( 'core/block-editor' );

		let innerBlocks = getBlocks( clientId );

		const isAddingSection = newSections > previousSections;

		if ( isAddingSection ) {
			innerBlocks = [
				...innerBlocks,
				...times( newSections - previousSections, () => {
					return createBlock( 'hrswp/search-filter-section' );
				} ),
			];
		} else {
			// The removed section will be the last of the inner blocks.
			innerBlocks = dropRight( innerBlocks, previousSections - newSections );
		}

		replaceInnerBlocks( clientId, innerBlocks, false );
	},
} ) )( SearchFilterEditContainer );

const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
	return map(
		innerBlocksTemplate,
		( [ name, attributes, innerBlocks = [] ] ) =>
			createBlock( name, attributes, createBlocksFromInnerBlocksTemplate( innerBlocks ) )
	);
};

const SearchFilterEdit = ( props ) => {
	const { clientId, name, className } = props;
	const { blockType, hasInnerBlocks } = useSelect( ( select ) => {
		const {	getBlockType } = select( 'core/blocks' );

		return {
			blockType: getBlockType( name ),
			hasInnerBlocks: select( 'core/block-editor' ).getBlocks( clientId ).length > 0,
		};
	}, [ clientId, name ] );

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	if ( hasInnerBlocks ) {
		return (
			<SearchFilterEditContainerWrapper { ...props } />
		);
	}

	return (
		<div className={ className }>
			<InnerBlocks
				templateLock="all"
				template={ TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
};

export default SearchFilterEdit;
