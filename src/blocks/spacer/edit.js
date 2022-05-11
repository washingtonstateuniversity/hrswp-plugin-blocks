/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	InspectorControls,
	useBlockProps,
	store: blockEditorStore,
} = wp.blockEditor;
const { PanelBody, ResizableBox, RangeControl } = wp.components;
const { compose, withInstanceId } = wp.compose;
const { withDispatch } = wp.data;
const { useState, useEffect } = wp.element;
const { View } = wp.primitives;

const MIN_SPACER_HEIGHT = 18;
const MAX_SPACER_HEIGHT = 540;

const MIN_SPACER_WIDTH = 1;
const MAX_SPACER_WIDTH = 500;

const SpacerEdit = ({
	attributes,
	isSelected,
	setAttributes,
	onResizeStart,
	onResizeStop,
	context,
}) => {
	const { orientation } = context;
	const [isResizing, setIsResizing] = useState(false);
	const { height, width } = attributes;
	const updateHeight = (value) => {
		setAttributes({
			height: value,
		});
	};
	const updateWidth = (value) => {
		setAttributes({
			width: value,
		});
	};

	const handleOnResizeStart = (...args) => {
		onResizeStart(...args);
		setIsResizing(true);
	};

	const handleOnVerticalResizeStop = (event, direction, elt, delta) => {
		onResizeStop();
		const spacerHeight = Math.min(
			parseInt(height + delta.height, 10),
			MAX_SPACER_HEIGHT
		);
		updateHeight(spacerHeight);
		setIsResizing(false);
	};

	const handleOnHorizontalResizeStop = (event, direction, elt, delta) => {
		onResizeStop();
		const spacerWidth = Math.min(
			parseInt(width + delta.width, 10),
			MAX_SPACER_WIDTH
		);
		updateWidth(spacerWidth);
		setIsResizing(false);
	};

	const resizableBoxWithOrientation = (blockOrientation) => {
		if (blockOrientation === 'horizontal') {
			return (
				<ResizableBox
					className={classnames(
						'block-library-spacer__resize-container',
						'resize-horizontal',
						{
							'is-selected': isSelected,
						}
					)}
					size={{
						width,
						height: 24,
					}}
					minWidth={MIN_SPACER_WIDTH}
					enable={{
						top: false,
						right: true,
						bottom: false,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false,
					}}
					onResizeStart={handleOnResizeStart}
					onResizeStop={handleOnHorizontalResizeStop}
					showHandle={isSelected}
					__experimentalShowTooltip={true}
					__experimentalTooltipProps={{
						axis: 'x',
						position: 'corner',
						isVisible: isResizing,
					}}
				/>
			);
		}

		return (
			<ResizableBox
				className={classnames(
					'block-library-spacer__resize-container',
					{
						'is-selected': isSelected,
					}
				)}
				size={{
					height,
				}}
				minHeight={MIN_SPACER_HEIGHT}
				enable={{
					top: false,
					right: false,
					bottom: true,
					left: false,
					topRight: false,
					bottomRight: false,
					bottomLeft: false,
					topLeft: false,
				}}
				onResizeStart={handleOnResizeStart}
				onResizeStop={handleOnVerticalResizeStop}
				showHandle={isSelected}
				__experimentalShowTooltip={true}
				__experimentalTooltipProps={{
					axis: 'y',
					position: 'bottom',
					isVisible: isResizing,
				}}
			/>
		);
	};

	useEffect(() => {
		if (orientation === 'horizontal' && !width) {
			updateWidth(72);
			updateHeight(0);
		}
	}, []);

	return (
		<>
			<View {...useBlockProps()}>
				{resizableBoxWithOrientation(orientation)}
			</View>
			<InspectorControls>
				<PanelBody title={__('Spacer settings')}>
					{orientation === 'horizontal' && (
						<RangeControl
							label={__('Width in pixels')}
							min={MIN_SPACER_WIDTH}
							max={Math.max(MAX_SPACER_WIDTH, width)}
							value={width}
							onChange={updateWidth}
						/>
					)}
					{orientation !== 'horizontal' && (
						<RangeControl
							label={__('Height in pixels')}
							min={MIN_SPACER_HEIGHT}
							max={Math.max(MAX_SPACER_HEIGHT, height)}
							step={18}
							value={height}
							onChange={updateHeight}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default compose([
	withDispatch((dispatch) => {
		const { toggleSelection } = dispatch(blockEditorStore);

		return {
			onResizeStart: () => toggleSelection(false),
			onResizeStop: () => toggleSelection(true),
		};
	}),
	withInstanceId,
])(SpacerEdit);
