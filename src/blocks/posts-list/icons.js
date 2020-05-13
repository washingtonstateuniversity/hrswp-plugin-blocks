/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';

export const grid = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24">
		<Path d="M9 9V3H3v6h6zm8 0V3h-6v6h6zm-8 8v-6H3v6h6zm8 0v-6h-6v6h6z" />
	</SVG>
);

export const pin = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24">
		<Path d="M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z" />
	</SVG>
);

export const list = (
	<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<Path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
	</SVG>
);
