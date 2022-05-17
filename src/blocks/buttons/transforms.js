/**
 * WordPress dependencies
 */
const { createBlock } = wp.blocks;

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name } = metadata;

const transforms = {
	from: [
		{
			type: 'block',
			blocks: ['core/buttons'],
			transform: (attributes, innerBlocks) =>
				// Creates the buttons block
				createBlock(
					name,
					attributes,
					// Convert the inner buttons as well
					innerBlocks.map((block) =>
						createBlock('hrswp/button', block.attributes)
					)
				),
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: ['core/button'],
			transform: (buttons) =>
				// Creates the buttons block
				createBlock(
					name,
					{},
					// Loop the selected buttons
					buttons.map((attributes) =>
						// Create singular button in the buttons block
						createBlock('hrswp/button', attributes)
					)
				),
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: ['core/paragraph'],
			transform: (buttons) =>
				// Creates the buttons block
				createBlock(
					name,
					{},
					// Loop the selected buttons
					buttons.map((attributes) => {
						// Remove any HTML tags
						const div = document.createElement('div');
						div.innerHTML = attributes.content;
						const text = div.innerText || '';
						// Get first url
						const link = div.querySelector('a');
						const url = link?.getAttribute('href');
						// Create singular button in the buttons block
						return createBlock('core/button', {
							text,
							url,
						});
					})
				),
			isMatch: (paragraphs) => {
				return paragraphs.every((attributes) => {
					const div = document.createElement('div');
					div.innerHTML = attributes.content;
					const text = div.innerText || '';
					const links = div.querySelectorAll('a');
					return text.length <= 30 && links.length <= 1;
				});
			},
		},
	],
};

export default transforms;
