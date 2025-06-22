<script lang="ts">
  export let src: string;
  export let alt: string;
  export let className: string = "";
</script>

<img
  {src}
  {alt}
  class={`${className} w-full rounded-sm object-cover`}
/>
