<script lang="ts">
	interface Props {
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: () => void;
		class?: string;
		ariaLabel?: string;
		children: any;
	}

	let {
		type = 'button',
		disabled = false,
		onclick,
		class: className = '',
		ariaLabel,
		children
	}: Props = $props();
</script>

<button
	{type}
	{disabled}
	{onclick}
	aria-label={ariaLabel}
	class="cursor-pointer rounded-md bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 {className}"
>
	{@render children()}
</button>
