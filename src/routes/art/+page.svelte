<script lang="ts">
	import ArtGallery from '$lib/components/art/ArtGallery.svelte';
	import CategoryFilter from '$lib/components/art/CategoryFilter.svelte';
	import type { ArtCategory } from '$lib/components/types/art';
	import Meta from '$lib/components/Meta.svelte';
	import { onMount } from 'svelte';

	let artPortfolio: ArtCategory[] = [];
	let loading = true;
	let error = '';
	let activeCategory = 'all';

	$: filteredArt =
		activeCategory === 'all'
			? artPortfolio
			: artPortfolio.filter((category) => category.slug === activeCategory);

	onMount(async () => {
		try {
			const response = await fetch('/data/artworks.json');
			if (!response.ok) {
				throw new Error(`Failed to load artworks: ${response.status}`);
			}
			const data = await response.json();
			artPortfolio = data.categories;
		} catch (err) {
			console.error('Error loading artworks:', err);
			error = 'Failed to load artwork data. Please try again later.';
		} finally {
			loading = false;
		}
	});

	function handleCategoryChange(event: CustomEvent<string>) {
		activeCategory = event.detail;
	}
</script>

<Meta
	title="Art Portfolio"
	description="Discover Juju's art collection featuring creative visual works, paintings, and artistic experiments through technology, acrylic paint, oil paint, watercolor, and more."
	keywords="digital art, painting, acrylic, watercolor, oil painting, creative portfolio, visual art, illustrations, artistic works"
	url="https://url/art"
/>

<h1 class="h2-style">My Art Gallery</h1>
<p class="py-4">
	I'm passionate about creating art across various mediums! I especially enjoy painting with oil
	paints, watercolors, and acrylics, as well as drawing with charcoal and graphite. Explore my
	gallery below and click on any image to view it at full size.
</p>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
	<div class="mx-auto">
		{#if loading}
			<div class="flex items-center justify-center py-20">
				<div class="h-12 w-12 animate-spin rounded-full border-b-2 border-[#53C1DE]"></div>
				<span class="ml-4 text-gray-600">Loading artwork...</span>
			</div>
		{:else if error}
			<div class="py-20 text-center">
				<div class="mb-4 text-lg text-red-500">⚠️ {error}</div>
				<button
					class="rounded-lg bg-[#53C1DE] px-6 py-2 text-white transition-colors hover:bg-blue-700"
					on:click={() => window.location.reload()}
				>
					Retry
				</button>
			</div>
		{:else}
			<CategoryFilter
				categories={artPortfolio}
				{activeCategory}
				on:categoryChange={handleCategoryChange}
			/>

			<ArtGallery categories={filteredArt} />
		{/if}
	</div>
</div>
