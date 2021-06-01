/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {
	BlockControls,
	useBlockProps,
	__experimentalUseInnerBlocksProps,
} = wp.blockEditor;
const { ToolbarGroup, ToolbarItem } = wp.components;

/**
 * Internal dependencies
 */
import { name as buttonBlockName } from '../button';
import ContentJustificationDropdown from './content-justification-dropdown';

const ALLOWED_BLOCKS = [ buttonBlockName ];
const BUTTONS_TEMPLATE = [ [ 'hrswp/button' ] ];

function ButtonsEdit( {
	attributes: { contentJustification, orientation },
	setAttributes,
} ) {
	const blockProps = useBlockProps( {
		className: classnames( {
			[ `is-content-justification-${ contentJustification }` ]: contentJustification,
			'is-vertical': orientation === 'vertical',
		} ),
	} );
	const innerBlocksProps = __experimentalUseInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: BUTTONS_TEMPLATE,
		orientation,
		__experimentalLayout: {
			type: 'default',
			alignments: [],
		},
		templateInsertUpdatesSelection: true,
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarItem>
						{ ( toggleProps ) => (
							<ContentJustificationDropdown
								toggleProps={ toggleProps }
								value={ contentJustification }
								onChange={ ( updatedValue ) => {
									setAttributes( {
										contentJustification: updatedValue,
									} );
								} }
							/>
						) }
					</ToolbarItem>
				</ToolbarGroup>
			</BlockControls>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default ButtonsEdit;
