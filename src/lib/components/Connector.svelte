<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Props interface with better documentation
	interface ConnectorProps {
		orientation: 'left' | 'right';
		width: number;
		height: number;
		strokeWidth: number;
		className?: string;
		topText?: string;
		bottomText?: string;
		textHorizontalPosition?: string;
		textRightOffset?: string;
		cornerRadius?: number; // New prop for corner radius
	}

	// Props with defaults
	export let orientation: ConnectorProps['orientation'];
	export let width: ConnectorProps['width'];
	export let height: ConnectorProps['height'];
	export let strokeWidth: ConnectorProps['strokeWidth'];
	export let className: ConnectorProps['className'] = '';
	export let topText: ConnectorProps['topText'] = '';
	export let bottomText: ConnectorProps['bottomText'] = '';
	export let cornerRadius: ConnectorProps['cornerRadius'] = 20;

	// Configurable positioning (replacing magic numbers)
	export let textHorizontalPosition: ConnectorProps['textHorizontalPosition'] = '3%';
	export let textRightOffset: ConnectorProps['textRightOffset'] = '-66.666667%'; // -2/3 converted

	// Reactive variables
	let connectorRef: HTMLDivElement;
	let scrollY = writable(0);
	let reduceMotion = writable(false);

	// Scroll position tracking with throttling for performance
	let ticking = false;
	const updateScrollPosition = () => {
		if (!ticking) {
			requestAnimationFrame(() => {
				scrollY.set(window.scrollY);
				ticking = false;
			});
			ticking = true;
		}
	};

	// Media query for reduced motion
	const checkReducedMotion = () => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduceMotion.set(mediaQuery.matches);

		mediaQuery.addEventListener('change', (e) => {
			reduceMotion.set(e.matches);
		});
	};

	// Calculate offset based on scroll position
	const getOffset = (currentScrollY: number): number => {
		if (connectorRef) {
			return Math.min(height, Math.max(0, currentScrollY - connectorRef.offsetTop + height));
		}
		return 0;
	};

	// Generate rounded left path using quadratic Bezier curves
	const generateRoundedLeftPath = (): string => {
		const startX = strokeWidth / 2;
		const endX = width - strokeWidth / 2;
		const midY = height / 2 - strokeWidth;
		const radius = Math.min(cornerRadius!, (endX - startX) / 2, height / 4);

		return `M${startX} 0 V${midY - radius} Q${startX} ${midY} ${startX + radius} ${midY} H${endX - radius} Q${endX} ${midY} ${endX} ${midY + radius} V${height}`;
	};

	// Generate rounded right path using quadratic Bezier curves
	const generateRoundedRightPath = (): string => {
		const startX = width - strokeWidth / 2;
		const endX = strokeWidth / 2;
		const midY = height / 2 - strokeWidth / 2;
		const radius = Math.min(cornerRadius!, (startX - endX) / 2, height / 4);

		return `M${startX} 0 V${midY - radius} Q${startX} ${midY} ${startX - radius} ${midY} H${endX + radius} Q${endX} ${midY} ${endX} ${midY + radius} V${height}`;
	};

	// Generate SVG path based on orientation with rounded corners
	const generatePath = (): string => {
		return orientation === 'left' ? generateRoundedLeftPath() : generateRoundedRightPath();
	};

	// Calculate total path length for animation (approximation for rounded path)
	const getPathLength = (): number => {
		// Approximate path length including the rounded corners
		const straightLength = width + height - 2 * cornerRadius!;
		const curveLength = Math.PI * cornerRadius!; // Approximate quarter circle length * 2
		return straightLength + curveLength;
	};

	// Calculate stroke dash offset for animation
	$: strokeDashOffset = $reduceMotion
		? 0
		: getPathLength() - (getOffset($scrollY) / height) * getPathLength();

	// Dynamic text positioning classes for top text
	$: topTextPositionClasses =
		orientation === 'left'
			? `top-[5%] left-[${textHorizontalPosition}]`
			: `top-[5%] right-[${textRightOffset}]`;

	// Dynamic text positioning classes for bottom text
	$: bottomTextPositionClasses =
		orientation === 'left'
			? `bottom-[5%] left-[${textHorizontalPosition}]`
			: `bottom-[5%] right-[${textRightOffset}]`;

	onMount(() => {
		checkReducedMotion();
		updateScrollPosition();

		window.addEventListener('scroll', updateScrollPosition, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateScrollPosition);
		};
	});
</script>

<div
	bind:this={connectorRef}
	class="relative hidden w-full flex-shrink flex-row justify-center text-gray-800 lg:flex {className}"
>
	<div class="relative">
		<svg
			{width}
			{height}
			viewBox="0 0 {width} {height}"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Project connector line"
		>
			<path
				d={generatePath()}
				stroke="#D1D5DB"
				stroke-opacity="0.4"
				stroke-width="6"
				stroke-linecap="round"
			/>
		</svg>

		{#if topText}
			<div
				class="absolute flex {topTextPositionClasses} px-3 py-1 text-2xl font-medium whitespace-nowrap text-gray-600"
				aria-hidden="true"
			>
				{topText}
			</div>
		{/if}

		{#if bottomText}
			<div
				class="absolute flex {bottomTextPositionClasses} px-3 py-1 text-2xl font-medium whitespace-nowrap text-gray-600 {bottomText.includes(
					'In Progress'
				)
					? 'text-green-700'
					: ''}"
				aria-hidden="true"
			>
				{bottomText}
			</div>
		{/if}
	</div>

	<!-- Animated SVG overlay with fixed positioning class -->
	<svg
		class="absolute top-0 left-1/2 -translate-x-1/2 transform"
		{width}
		{height}
		viewBox="0 0 {width} {height}"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Animated project connector"
	>
		<path
			d={generatePath()}
			stroke="#6B7280"
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-dasharray="{getPathLength()} {getPathLength()}"
			stroke-dashoffset={strokeDashOffset}
			style="transition: stroke-dashoffset 0.1s ease-out;"
		/>
	</svg>
</div>
