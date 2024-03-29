/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';

export const icon = (
	<SVG viewBox="468 268 24 24" xmlns="http://www.w3.org/2000/svg">
		<Path d="M468 268h24v24h-24v-24z" fill="none" />
		<Path d="M472 272h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-12c0-1.1.9-2 2-2zm0 2v12h10v-12h-10zm12 0v12h4v-12h-4z" />
	</SVG>
);

export const sidebarRight = (
	<SVG
		width="48"
		height="48"
		viewBox="0 0 48 48"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
		/>
	</SVG>
);

export const sidebarLeft = (
	<SVG
		width="48"
		height="48"
		viewBox="0 0 48 48"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
		/>
	</SVG>
);
