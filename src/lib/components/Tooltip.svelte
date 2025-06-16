<script lang="ts">
	export let text: string;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let className: string = '';
	export let delay: number = 0;

	let showTooltip = false;
	let timeoutId: number;

	function handleMouseEnter() {
		if (delay > 0) {
			timeoutId = setTimeout(() => {
				showTooltip = true;
			}, delay);
		} else {
			showTooltip = true;
		}
	}

	function handleMouseLeave() {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		showTooltip = false;
	}

	$: positionClasses = {
		top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
	};

	$: arrowClasses = {
		top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-transparent border-t-gray-800',
		bottom:
			'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800',
		left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800',
		right:
			'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800'
	};
</script>

<div
	class="relative inline-block"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	role="tooltip"
>
	<!-- Slot for the trigger element -->
	<slot />

	<!-- Tooltip -->
	{#if showTooltip}
		<div
			class="absolute z-50 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white transition-all duration-200 {positionClasses[
				position
			]} {className}"
		>
			{text}
			<!-- Arrow -->
			<div class="absolute h-0 w-0 {arrowClasses[position]}"></div>
		</div>
	{/if}
</div>
