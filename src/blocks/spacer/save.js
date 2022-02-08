/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

export default function save( { attributes } ) {
	return (
		<div
			{ ...useBlockProps.save( {
				style: { height: attributes.height, width: attributes.width },
				'aria-hidden': true,
			} ) }
		/>
	);
}
