/**
 * External dependencies
 */
import classnames from 'classnames';
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, ToolbarButton } from '@wordpress/components';
import {
	InspectorControls,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	useInnerBlocksProps,
	__experimentalBlockVariationPicker,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { sidebarRight, sidebarLeft } from './icons';

/**
 * Set allowed blocks to empty array to prevent adding columns.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [];

function SidebarEditContainer( { attributes, setAttributes } ) {
	const { isStackedOnMobile, sidebarPosition, verticalAlignment } =
		attributes;

	const classes = classnames( {
		[ `has-sidebar-on-the-left` ]: 'left' === sidebarPosition,
		[ `are-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
		[ `is-not-stacked-on-mobile` ]: ! isStackedOnMobile,
	} );

	const blockProps = useBlockProps( { className: classes } );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		renderAppender: false,
	} );

	return (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={ () => setAttributes( { verticalAlignment } ) }
					value={ verticalAlignment }
				/>
				<ToolbarButton
					icon={ sidebarLeft }
					title={ __( 'Show sidebar on left' ) }
					isActive={ sidebarPosition === 'left' }
					onClick={ () =>
						setAttributes( { sidebarPosition: 'left' } )
					}
				/>
				<ToolbarButton
					icon={ sidebarRight }
					title={ __( 'Show sidebar on right' ) }
					isActive={ sidebarPosition === 'right' }
					onClick={ () =>
						setAttributes( { sidebarPosition: 'right' } )
					}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label={ __( 'Stack on mobile' ) }
						checked={ isStackedOnMobile }
						onChange={ () =>
							setAttributes( {
								isStackedOnMobile: ! isStackedOnMobile,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...innerBlocksProps } />
		</>
	);
}

function Placeholder( { clientId, name, setAttributes } ) {
	const { blockType, defaultVariation, variations } = useSelect(
		( select ) => {
			const {
				getBlockVariations,
				getBlockType,
				getDefaultBlockVariation,
			} = select( blocksStore );

			return {
				blockType: getBlockType( name ),
				defaultVariation: getDefaultBlockVariation( name, 'block' ),
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[ name ]
	);
	const { replaceInnerBlocks } = useDispatch( blockEditorStore );
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<__experimentalBlockVariationPicker
				icon={ get( blockType, [ 'icon', 'src' ] ) }
				label={ get( blockType, [ 'title' ] ) }
				variations={ variations }
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
					if ( nextVariation.innerBlocks ) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(
								nextVariation.innerBlocks
							),
							true
						);
					}
				} }
				allowSkip
			/>
		</div>
	);
}

const SidebarEdit = ( props ) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);
	const Component = hasInnerBlocks ? SidebarEditContainer : Placeholder;

	return <Component { ...props } />;
};

export default SidebarEdit;
