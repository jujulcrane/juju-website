<script lang="ts">
	type ButtonVariant = 'default' | 'blue' | 'yellow' | 'white';

	interface Props {
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: () => void;
		class?: string;
		ariaLabel?: string;
		variant?: ButtonVariant;
		active?: boolean;
		children: any;
	}

	let {
		type = 'button',
		disabled = false,
		onclick,
		class: className = '',
		ariaLabel,
		variant = 'default',
		active = false,
		children
	}: Props = $props();

	// Use $derived to make variantStyles reactive to the active prop
	const variantStyles = $derived({
		default: 'bg-black text-white hover:bg-gray-800',
		blue: active
			? 'bg-[#53C1DE] text-white shadow-lg'
			: 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg',
		yellow: active
			? 'bg-[#FFC107] text-black shadow-lg'
			: 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg',
		white: 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
	});

	const computedClasses = $derived(
		`cursor-pointer rounded-md px-6 py-3 font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${className}`
	);
</script>

<button {type} {disabled} {onclick} aria-label={ariaLabel} class={computedClasses}>
	{@render children()}
</button>
