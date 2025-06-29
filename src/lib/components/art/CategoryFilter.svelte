<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { ArtCategory } from "./types/art";
	import Button from "$lib/components/Button.svelte";
  
	export let categories: ArtCategory[];
	export let activeCategory: string;
  
	const dispatch = createEventDispatcher<{
		categoryChange: string;
	}>();
  
	function handleCategoryClick(categorySlug: string) {
		dispatch('categoryChange', categorySlug);
	}
</script>

<div class="flex flex-wrap justify-center gap-4 mb-12">
	<Button
		variant={activeCategory === 'all' ? 'default' : 'white'}
		class="rounded-full"
		onclick={() => handleCategoryClick('all')}
	>
		All Artwork
	</Button>
	
	{#each categories as category}
		<Button
			variant={activeCategory === category.slug ? 'default' : 'white'}
			class="rounded-full"
			onclick={() => handleCategoryClick(category.slug)}
		>
			{category.name}
		</Button>
	{/each}
</div>
