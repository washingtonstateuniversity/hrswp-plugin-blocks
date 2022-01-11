/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useCallback, useEffect, useState, useRef } = wp.element;
const {
	Button,
	ButtonGroup,
	Notice,
	PanelBody,
	TextControl,
	ToolbarButton,
	Popover,
} = wp.components;
const {
	BlockControls,
	InspectorControls,
	RichText,
	useBlockProps,
	__experimentalUseBorderProps: useBorderProps,
	__experimentalUseColorProps: useColorProps,
	__experimentalGetSpacingClassesAndStyles: useSpacingProps,
	__experimentalLinkControl: LinkControl,
} = wp.blockEditor;
const { displayShortcut, isKeyboardEvent } = wp.keycodes;
const { createBlock } = wp.blocks;

/**
 * Internal dependencies
 */
import { link, linkOff } from './icons';

const NEW_TAB_REL = 'noreferrer noopener';

function WidthPanel( { selectedWidth, setAttributes } ) {
	function handleChange( newWidth ) {
		// Check if we are toggling the width off
		const width = selectedWidth === newWidth ? undefined : newWidth;

		// Update attributes
		setAttributes( { width } );
	}

	return (
		<PanelBody title={ __( 'Width settings' ) }>
			<ButtonGroup aria-label={ __( 'Button width' ) }>
				{ [ 25, 50, 75, 100 ].map( ( widthValue ) => {
					return (
						<Button
							key={ widthValue }
							isSmall
							variant={
								widthValue === selectedWidth
									? 'primary'
									: undefined
							}
							onClick={ () => handleChange( widthValue ) }
						>
							{ widthValue }%
						</Button>
					);
				} ) }
			</ButtonGroup>
		</PanelBody>
	);
}

// function URLPicker( {
// 	isSelected,
// 	url,
// 	setAttributes,
// 	opensInNewTab,
// 	onToggleOpenInNewTab,
// 	anchorRef,
// } ) {
// 	const [ isURLPickerOpen, setIsURLPickerOpen ] = useState( false );
// 	const urlIsSet = !! url;
// 	const urlIsSetandSelected = urlIsSet && isSelected;
// 	const openLinkControl = () => {
// 		setIsURLPickerOpen( true );
// 		return false; // prevents default behaviour for event
// 	};
// 	const unlinkButton = () => {
// 		setAttributes( {
// 			url: undefined,
// 			linkTarget: undefined,
// 			rel: undefined,
// 		} );
// 		setIsURLPickerOpen( false );
// 	};
// 	const msg = __(
// 		'Avoid opening links in new windows/tabs. It can be disorienting and presents accessibility issues (see WCAG 2.0 G200).'
// 	);
// 	const linkControl = ( isURLPickerOpen || urlIsSetandSelected ) && (
// 		<Popover
// 			position="bottom center"
// 			onClose={ () => setIsURLPickerOpen( false ) }
// 			anchorRef={ anchorRef?.current }
// 		>
// 			<__experimentalLinkControl
// 				className="wp-block-navigation-link__inline-link-input"
// 				value={ { url, opensInNewTab } }
// 				onChange={ ( {
// 					url: newURL = '',
// 					opensInNewTab: newOpensInNewTab,
// 				} ) => {
// 					setAttributes( { url: newURL } );

// 					if ( opensInNewTab !== newOpensInNewTab ) {
// 						onToggleOpenInNewTab( newOpensInNewTab );
// 					}
// 				} }
// 			/>
// 			{ opensInNewTab && (
// 				<div className="block-editor-new-tab-checker">
// 					<Notice
// 						spokenMessage={ msg }
// 						status="warning"
// 						isDismissible={ false }
// 					>
// 						<>
// 							{ msg }
// 							<ExternalLink
// 								href={
// 									'https://hrscms.hrs.wsu.edu/accessibility-guide/link-text/#opening-links-in-browsers-new-tabs'
// 								}
// 							>
// 								{ 'Refer to the HRS Style Guide' }
// 							</ExternalLink>
// 						</>
// 					</Notice>
// 				</div>
// 			) }
// 		</Popover>
// 	);
// 	return (
// 		<>
// 			<BlockControls>
// 				<ToolbarGroup>
// 					{ ! urlIsSet && (
// 						<ToolbarButton
// 							name="link"
// 							icon={ link }
// 							title={ __( 'Link' ) }
// 							shortcut={ displayShortcut.primary( 'k' ) }
// 							onClick={ openLinkControl }
// 						/>
// 					) }
// 					{ urlIsSetandSelected && (
// 						<ToolbarButton
// 							name="link"
// 							icon={ linkOff }
// 							title={ __( 'Unlink' ) }
// 							shortcut={ displayShortcut.primaryShift( 'k' ) }
// 							onClick={ unlinkButton }
// 							isActive={ true }
// 						/>
// 					) }
// 				</ToolbarGroup>
// 			</BlockControls>
// 			{ isSelected && (
// 				<KeyboardShortcuts
// 					bindGlobal
// 					shortcuts={ {
// 						[ rawShortcut.primary( 'k' ) ]: openLinkControl,
// 						[ rawShortcut.primaryShift( 'k' ) ]: unlinkButton,
// 					} }
// 				/>
// 			) }
// 			{ linkControl }
// 		</>
// 	);
// }

function ButtonEdit( props ) {
	const {
		attributes,
		setAttributes,
		className,
		isSelected,
		onReplace,
		mergeBlocks,
	} = props;
	const {
		linkTarget,
		placeholder,
		rel,
		style,
		text,
		url,
		width,
	} = attributes;
	const onSetLinkRel = useCallback(
		( value ) => {
			setAttributes( { rel: value } );
		},
		[ setAttributes ]
	);

	function onToggleOpenInNewTab( value ) {
		const newLinkTarget = value ? '_blank' : undefined;

		let updatedRel = rel;
		if ( newLinkTarget && ! rel ) {
			updatedRel = NEW_TAB_REL;
		} else if ( ! newLinkTarget && rel === NEW_TAB_REL ) {
			updatedRel = undefined;
		}

		setAttributes( {
			linkTarget: newLinkTarget,
			rel: updatedRel,
		} );
	}

	function setButtonText( newText ) {
		// Remove anchor tags from button text content.
		setAttributes( { text: newText.replace( /<\/?a[^>]*>/g, '' ) } );
	}

	function onKeyDown( event ) {
		if ( isKeyboardEvent.primary( event, 'k' ) ) {
			startEditing( event );
		} else if ( isKeyboardEvent.primaryShift( event, 'k' ) ) {
			unlink();
			richTextRef.current?.focus();
		}
	}

	const borderProps = useBorderProps( attributes );
	const colorProps = useColorProps( attributes );
	const spacingProps = useSpacingProps( attributes );
	const ref = useRef();
	const richTextRef = useRef();
	const blockProps = useBlockProps( { ref, onKeyDown } );
	// 	const msg = __(
	// 		'Avoid opening links in new windows/tabs. It can be disorienting and presents accessibility issues (see WCAG 2.0 G200).'
	// 	);

	const [ isEditingURL, setIsEditingURL ] = useState( false );
	const isURLSet = !! url;
	const opensInNewTab = linkTarget === '_blank';

	function startEditing( event ) {
		event.preventDefault();
		setIsEditingURL( true );
	}

	function unlink() {
		setAttributes( {
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		} );
		setIsEditingURL( false );
	}

	useEffect( () => {
		if ( ! isSelected ) {
			setIsEditingURL( false );
		}
	}, [ isSelected ] );

	return (
		<>
			<div
				{ ...blockProps }
				className={ classnames( blockProps.className, {
					[ `has-custom-width wp-block-button__width-${ width }` ]: width,
					[ `has-custom-font-size` ]: blockProps.style.fontSize,
				} ) }
			>
				<RichText
					ref={ richTextRef }
					aria-label={ __( 'Button text' ) }
					placeholder={ placeholder || __( 'Add text…' ) }
					value={ text }
					onChange={ ( value ) => setButtonText( value ) }
					withoutInteractiveFormatting
					className={ classnames(
						className,
						'wp-block-button__link',
						colorProps.className,
						borderProps.className,
						{
							'no-border-radius': style?.border?.radius === 0,
						}
					) }
					style={ {
						...borderProps.style,
						...colorProps.style,
						...spacingProps.style,
					} }
					onSplit={ ( value ) =>
						createBlock( 'hrswp/button', {
							...attributes,
							text: value,
						} )
					}
					onReplace={ onReplace }
					onMerge={ mergeBlocks }
					identifier="text"
				/>
			</div>
			<BlockControls group="block">
				{ ! isURLSet && (
					<ToolbarButton
						name="link"
						icon={ linkOff }
						title={ __( 'Unlink' ) }
						shortcut={ displayShortcut.primaryShift( 'k' ) }
						onClick={ unlink }
						isActive={ true }
					/>
				) }
			</BlockControls>
			{ isSelected && ( isEditingURL || isURLSet ) && (
				<Popover
					position="bottom center"
					onClose={ () => {
						setIsEditingURL( false );
						richTextRef.current?.focus();
					} }
					anchorRef={ ref?.current }
					focusOnMount={ isEditingURL ? 'firstElement' : false }
				>
					<LinkControl
						className="wp-block-navigation-link__inline-link-input"
						value={ { url, opensInNewTab } }
						onChange={ ( {
							url: newURL = '',
							opensInNewTab: newOpensInNewTab,
						} ) => {
							setAttributes( { url: newURL } );

							if ( opensInNewTab !== newOpensInNewTab ) {
								onToggleOpenInNewTab( newOpensInNewTab );
							}
						} }
						onRemove={ () => {
							unlink();
							richTextRef.current?.focus();
						} }
						forceIsEditingLink={ isEditingURL }
					/>
					{/* { opensInNewTab && (
						<div className="block-editor-new-tab-checker">
							<Notice
								spokenMessage={ msg }
								status="warning"
								isDismissible={ false }
							>
								<>
									{ msg }
									<ExternalLink
										href={
											'https://hrscms.hrs.wsu.edu/accessibility-guide/link-text/#opening-links-in-browsers-new-tabs'
										}
									>
										{ 'Refer to the HRS Style Guide' }
									</ExternalLink>
								</>
							</Notice>
						</div>
					) } */}
				</Popover>
			) }

			<InspectorControls>
				<WidthPanel
					selectedWidth={ width }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<InspectorControls __experimentalGroup="advanced">
				<TextControl
					label={ __( 'Link rel' ) }
					value={ rel || '' }
					onChange={ onSetLinkRel }
				/>
			</InspectorControls>
		</>
	);
}

export default ButtonEdit;
