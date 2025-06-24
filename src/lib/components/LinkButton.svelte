<script lang="ts">
	interface Props {
		href?: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		disabled?: boolean;
		noLink?: boolean;
		class?: string;
		ariaLabel?: string;
		children: any;
		variant?: 'default' | 'outline';
	}

	let {
		href = '',
		target = '_self',
		disabled = false,
		noLink = false,
		class: className = '',
		ariaLabel,
		children,
		variant = 'default'
	}: Props = $props();

	const getVariantClasses = (variant: string) => {
		switch (variant) {
			case 'outline':
				return 'border border-white bg-transparent text-gray-500 hover:bg-white';
			default:
				return 'bg-black text-white hover:bg-gray-800';
		}
	};
</script>

{#if noLink}
	<span
		aria-label={ariaLabel}
		class="inline-block rounded-md px-6 py-3 font-medium transition-colors duration-200 {getVariantClasses(
			variant
		)} {className}"
	>
		{@render children()}
	</span>
{:else}
	<a
		{href}
		{target}
		aria-label={ariaLabel}
		class="inline-block cursor-pointer rounded-md px-6 py-3 font-medium transition-colors duration-200 {getVariantClasses(
			variant
		)} disabled:cursor-not-allowed disabled:opacity-50 {disabled
			? 'pointer-events-none opacity-50'
			: ''} {className}"
		class:disabled
	>
		{@render children()}
	</a>
{/if}
