<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	// Props for main info
	export let title: string = 'About Me';
	export let buttons: { label: string; href?: string; noLink?: boolean }[] = [];
	export let headshotSrc: string = '/AboutHeadshot.png';
	export let headshotAlt: string = 'Headshot';
	export let description: string = '';
	export let galleryImages: { src: string; alt: string }[] = [];
</script>

<div class="flex min-h-screen flex-col md:gap-y-4">
	<h1 class="h2-style">{title}</h1>

	<div class="flex flex-col gap-4 sm:flex-row">
		{#each buttons as btn}
			{#if btn.noLink}
				<LinkButton noLink={true}>{btn.label}</LinkButton>
			{:else}
				<LinkButton href={btn.href} target="_blank">{btn.label}</LinkButton>
			{/if}
		{/each}
	</div>

	<div class="flex flex-col lg:mt-4 lg:flex-row lg:gap-4">
		<img
			src={headshotSrc}
			alt={headshotAlt}
			class="my-4 w-full rounded-sm object-cover lg:my-0 lg:w-2/3"
		/>
		<p class="lg:text-lg">{@html description}</p>
	</div>

	{#if galleryImages.length > 0}
		<div class="hidden lg:flex lg:flex-row">
			{#each galleryImages as img}
				<img src={img.src} alt={img.alt} class="my-4 rounded-sm object-cover lg:my-0 lg:w-1/3" />
			{/each}
		</div>
	{/if}
</div>
