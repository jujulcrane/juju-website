<script lang="ts">
	import FrenchHornIcon from '$lib/assets/icons/FrenchHornIcon.svelte';
	import PaintingIcon from '$lib/assets/icons/PaintingIcon.svelte';
	import ReactIcon from '$lib/assets/icons/ReactIcon.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import SectionSep from '$lib/components/SectionSep.svelte';
</script>

<Meta
	title="Juju's Website"
	description="Welcome to Juju's creative portfolio featuring web development projects, art, music, and creative coding experiments."
	keywords="Juju, full-stack developer, artist, musician, portfolio, web development, painting, french horn"
	url="https://url.com"
/>

<div class="flex items-center justify-between w-full">
<h1>Juju <br>Juliet Crane <br>ジュジュ・クレーン</h1>
<div class="m-4 grid grid-cols-2 gap-4 items-center">
<ReactIcon size={120}/>
<PaintingIcon size={120}/>
<FrenchHornIcon size={160}/>
</div>
</div>
<SectionSep/>
<h2 class="w-full pb-4 font-light text-lg sm:text-2xl md:text-4xl lg:text-5xl">Developer, Musician, Artist, Athlete, Learner, Oatmeal Chef。</h2>
<img
					src="/JujuPresenting.png"
					alt="Juju presenting code to peers"
					class="w-full rounded-sm object-cover"
/>
