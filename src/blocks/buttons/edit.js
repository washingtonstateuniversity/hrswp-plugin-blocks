/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	BlockControls,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalBlockAlignmentMatrixControl as BlockAlignmentMatrixControl,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { name as buttonBlockName } from '../button';

const ALLOWED_BLOCKS = [ buttonBlockName ];

const POSITION_CLASSNAMES = {
	'top left': 'is-position-top-left',
	'top center': 'is-position-top-center',
	'top right': 'is-position-top-right',
	'center left': 'is-position-center-left',
	'center center': 'is-position-center-center',
	'center right': 'is-position-center-right',
	'bottom left': 'is-position-bottom-left',
	'bottom center': 'is-position-bottom-center',
	'bottom right': 'is-position-bottom-right',
};

function ButtonsEdit( props ) {
	const {
		attributes: { layout = {}, contentPosition },
		setAttributes,
		className,
	} = props;
	const { orientation, justifyContent } = layout;

	const wrapperClasses = classnames(
		className,
		{
			[ `is-content-justification-${ justifyContent }` ]: justifyContent,
			[ `is-${ orientation }` ]: orientation,
		},
		POSITION_CLASSNAMES[ contentPosition ]
	);

	const blockProps = useBlockProps( { className: wrapperClasses } );

	const preferredStyle = useSelect( ( select ) => {
		const preferredStyleVariations =
			select( blockEditorStore ).getSettings()
				.__experimentalPreferredStyleVariations;
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
			<BlockControls group="block">
				<BlockAlignmentMatrixControl
					label={ __( 'Change content position' ) }
					value={ contentPosition }
					onChange={ ( nextPosition ) =>
						setAttributes( {
							contentPosition: nextPosition,
						} )
					}
				/>
			</BlockControls>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default ButtonsEdit;
