<script lang="ts">
	import DownloadIcon from '$lib/assets/icons/DownloadIcon.svelte';
	import Tooltip from './Tooltip.svelte';

	export let href: string;
	export let filename: string;
	export let ariaLabel: string;
	export let tooltipText: string = 'Download';
	export let tooltipDirection: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let size: number = 20;
	export let className: string = '';

	function handleDownload() {
		const link = document.createElement('a');
		link.href = href;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

<Tooltip text={tooltipText} position={tooltipDirection} delay={250}>
	<button
		on:click={handleDownload}
		class="cursor-pointer hover:text-gray-300 {className}"
		aria-label={ariaLabel}
	>
		<DownloadIcon {size} />
	</button>
</Tooltip>
