<script lang="ts">
	import FrenchHornIcon from '$lib/assets/icons/FrenchHornIcon.svelte';
	import PaintingIcon from '$lib/assets/icons/PaintingIcon.svelte';
	import ReactIcon from '$lib/assets/icons/ReactIcon.svelte';
	import FullImage from '$lib/components/FullImage.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import SectionSep from '$lib/components/SectionSep.svelte';
</script>

<Meta
	title="Juju's Website"
	description="Welcome to Juju's creative portfolio featuring web development projects, art, music, and creative coding experiments."
	keywords="Juju, full-stack developer, artist, musician, portfolio, web development, painting, french horn"
	url="https://url.com"
/>

<SectionSep />
<div class="mt-4 flex w-full items-center justify-center gap-x-8">
	<h1 class="flex-end">Juliet Crane</h1>
	<h1>ジュジュ・クレーン</h1>
</div>
<div class="flex justify-center items-center gap-x-16">
		<ReactIcon size={120} />
		<PaintingIcon size={130} />
		<FrenchHornIcon size={160} />
	</div>
<SectionSep />
<h2 class="w-full pb-4 text-lg font-light sm:text-2xl md:text-4xl lg:text-5xl">
	Developer, Musician, Artist, Athlete, Learner, Oatmeal Chef。
</h2>
<FullImage src="/JujuPresenting.png" alt="Juju presenting code to peers" />
