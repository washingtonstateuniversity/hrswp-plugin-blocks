/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
const { __, _x, sprintf } = wp.i18n;

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import icon from './icon';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: _x('Accordion Heading', 'block title'),
	description: __(
		'The accordion panel heading that users will select to show or hide the panel content.'
	),
	icon,
	example: {
		attributes: {
			content: __('Panel Heading'),
			level: 2,
		},
	},
	__experimentalLabel(attributes, { context }) {
		if (context === 'accessibility') {
			const { content, level } = attributes;

			return isEmpty(content)
				? sprintf(
						/* translators: accessibility text. %s: heading level. */
						__('Level %s. Empty.'),
						level
				  )
				: sprintf(
						/* translators: accessibility text. 1: heading level. 2: heading content. */
						__('Level %1$s. %2$s'),
						level,
						content
				  );
		}
	},
	merge(attributes, attributesToMerge) {
		return {
			content:
				(attributes.content || '') + (attributesToMerge.content || ''),
		};
	},
	edit,
	save,
};
