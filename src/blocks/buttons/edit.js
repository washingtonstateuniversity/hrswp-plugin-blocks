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
	JustifyToolbar,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
import { name as buttonBlockName } from '../button';

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

	const justifyControls =
		orientation === 'vertical'
			? [ 'left', 'center', 'right' ]
			: [ 'left', 'center', 'right', 'space-between' ];

	return (
		<>
			<BlockControls>
				<JustifyToolbar
					allowedControls={ justifyControls }
					value={ contentJustification }
					onChange={ ( value ) =>
						setAttributes( { contentJustification: value } )
					}
					popoverProps={ {
						position: 'bottom right',
						isAlternate: true,
					} }
				/>
			</BlockControls>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default ButtonsEdit;
