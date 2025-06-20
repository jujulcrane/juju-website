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
	onclick={onclick}
	aria-label={ariaLabel}
	class="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer {className}"
>
	{@render children()}
</button>
