<script lang="ts">
  import type { ArtPiece } from './types/art';
  
  export let piece: ArtPiece;
function handleClick() {
    // Navigate directly to the image URL
    window.open(piece.imageUrl, '_blank');
  }
</script>

<div class="art-card group cursor-pointer" on:click={handleClick} on:keydown={(e) => e.key === 'Enter' && handleClick()} role="button" tabindex="0">
  <div class="relative overflow-hidden rounded-sm">
    <!-- Image Container -->
    <div class="aspect-square overflow-hidden">
      <img
        src={piece.imageUrl}
        alt={piece.title}
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    
    <!-- Overlay on Hover -->
    <div class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
      <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h3 class="text-xl font-bold mb-2">{piece.title}</h3>
        <p class="text-sm mb-2">{piece.description}</p>
        <div class="text-xs text-gray-300 space-y-1">
          {#if piece.medium !== 'N/A'}
            <p>{piece.medium}</p>
          {/if}
          {#if piece.size !== 'N/A'}
            <p>{piece.size}</p>
          {/if}
          <p>{piece.year}</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Card Info (Always Visible) -->
  <div class="p-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-1">
      {piece.title}
    </h3>
    <p class="text-sm text-gray-600 mb-2">
      {piece.description}
    </p>
    <div class="flex justify-between items-center text-xs text-gray-500">
      <div class="space-y-1">
        {#if piece.medium !== 'N/A'}
          <div>{piece.medium}</div>
        {/if}
        {#if piece.size !== 'N/A'}
          <div>{piece.size}</div>
        {/if}
      </div>
      <span>{piece.year}</span>
    </div>
  </div>
</div>

<style>
  .art-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .art-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
</style>
