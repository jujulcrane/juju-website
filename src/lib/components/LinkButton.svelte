<script lang="ts">
	interface Props {
		href?: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		disabled?: boolean;
		noLink?: boolean;
		class?: string;
		ariaLabel?: string;
		children: any;
	}

	let {
		href = '',
		target = '_self',
		disabled = false,
		noLink = false,
		class: className = '',
		ariaLabel,
		children
	}: Props = $props();
</script>

{#if noLink}
	<span
		aria-label={ariaLabel}
		class="inline-block rounded-md bg-black px-6 py-3 font-medium text-white {className}"
	>
		{@render children()}
	</span>
{:else}
	<a
		{href}
		{target}
		aria-label={ariaLabel}
		class="inline-block cursor-pointer rounded-md bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 {disabled ? 'pointer-events-none opacity-50' : ''} {className}"
		class:disabled
	>
		{@render children()}
	</a>
{/if}
