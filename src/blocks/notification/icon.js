/**
 * WordPress dependencies
 */
const { Path, SVG, Circle } = wp.components;

export default (
	<SVG viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
		<Path d="M0,0h48v48H0V0z" fill="none" />
		<Path d="M42,12H6c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V16C46,13.8,44.2,12,42,12z M42,32H6V16h36V32z M28,22v4 h12v-4H28z" />
		<Circle cx="11" cy="24" r="1.5" />
		<Circle cx="15" cy="24" r="1.5" />
		<Circle cx="19" cy="24" r="1.5" />
	</SVG>
);
