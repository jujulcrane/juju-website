<script lang="ts">
  import type { ArtCategory } from './types/art';
  import ArtCard from './ArtCard.svelte';
  
  export let categories: ArtCategory[];
</script>

<div class="space-y-16">
  {#each categories as category}
    <section class="category-section">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        {category.name}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each category.pieces as piece}
          <ArtCard {piece} />
        {/each}
      </div>
    </section>
  {/each}
</div>

<!-- Empty State -->
{#if categories.length === 0 || categories.every(cat => cat.pieces.length === 0)}
  <div class="text-center py-16">
    <div class="text-6xl mb-4">🎨</div>
    <h3 class="text-2xl font-semibold text-gray-900 mb-2">
      Coming Soon
    </h3>
    <p class="text-gray-600">
      New artwork is being added to this collection. Check back soon!
    </p>
  </div>
{/if}

<style>
  .category-section {
    scroll-margin-top: 100px;
  }
</style>
