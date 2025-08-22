<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Connector from '$lib/components/Connector.svelte';

	const buttons = [
		{ label: 'French Horn', noLink: true },
		{ label: 'Cornell Symphony Orchestra', href: 'https://www.cuorchestra.org/' },
		{ label: 'Cornell Horn Club', noLink: true }
	];

	// Hero image at top without text
	const heroImage = {
		src: '/images/music/soloHornPic.png',
		alt: 'Juju playing Horn at a concert'
	};

	interface MusicItem {
		src: string;
		alt: string;
		text: string;
	}

	// Music items, each with image and corresponding text
	const musicItems: MusicItem[] = [
		{
			src: '/images/music/HornStore.jpeg',
			alt: 'A vibrant display of French horns hanging in a specialty horn shop in Boston',
			text: `My musical journey began in first grade with the cello and flourished when I picked up the French horn in fourth grade. The French horn quickly became my passion and opened the door to the world of orchestral music.`
		},
		{
			src: '/images/music/NewYorkAllState.JPG',
			alt: 'The All-State horn section posing playfully with their horns held above their heads, smiling after the concert',
			text: `In eleventh grade, I had the honor of performing with the New York All-State Symphony Orchestra — my first experience playing horn in an orchestra, after years in band. It was a transformative moment, connecting with talented musicians statewide and discovering the magic of symphonic performance.`
		},
		{
			src: '/images/music/Horn in Italy.JPG',
			alt: 'Juju holding her French horn beside a fellow violinist in a historic Venetian church after a concert',
			text: `My senior year brought an unforgettable tour of Italy with the Cayuga Chamber Youth Orchestra, performing in breathtaking venues across Venice, Florence, and Rome.`
		},
		{
			src: '/images/music/BostonConcert.jpg',
			alt: 'Juju and the Cornell horn section, joined by alumni, proudly holding their horns after a Boston performance',
			text: `Now, I play French horn in the Cornell Symphony Orchestra, where I also serve as Merchandise Chair. In January 2025, I had an amazing time touring Boston with the orchestra, performing at the New England Conservatory and building lifelong memories with my section.`
		}
	];
</script>

<Meta
	title="Music"
	description="Learn about Juju's musical background on the French Horn and Cello."
	keywords="music portfolio, french horn, Symphony Orchestra, Cornell University"
	url="https://url/music"
/>

<div class="flex min-h-screen flex-col gap-8 p-4">
	<h1 class="h2-style">My Music</h1>

	<!-- Hero image without text -->
	<img
		src={heroImage.src}
		alt={heroImage.alt}
		class="mx-auto aspect-[4/5] w-full max-w-xl rounded-sm object-cover"
	/>

	<!-- Alternating image & text sections with connectors -->
	<div class="flex flex-col gap-16">
		{#each musicItems as item, i}
			<!-- Connector above all except first -->
			{#if i > 0}
				<Connector
					orientation={i % 2 === 0 ? 'left' : 'right'}
					width={300}
					height={200}
					strokeWidth={6}
					topText=""
					bottomText=""
					className="mx-auto"
				/>
			{/if}

			<div class="flex flex-col items-center gap-10 lg:flex-row">
				{#if i % 2 === 0}
					<!-- Even index: images left -->
					<div class="flex justify-center lg:w-1/2">
						<img
							src={item.src}
							alt={item.alt}
							class="aspect-[4/5] w-full max-w-md rounded-lg object-cover shadow-lg"
						/>
					</div>
					<div class="lg:w-1/2">
						<p class="text-lg leading-relaxed">{item.text}</p>
					</div>
				{:else}
					<!-- Odd index: text left -->
					<div class="lg:w-1/2">
						<p class="text-lg leading-relaxed">{item.text}</p>
					</div>
					<div class="flex justify-center lg:w-1/2">
						<img
							src={item.src}
							alt={item.alt}
							class="aspect-[4/5] w-full max-w-md rounded-lg object-cover shadow-lg"
						/>
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<!-- Buttons -->
	<div class="flex flex-wrap gap-4">
		{#each buttons as btn}
			{#if btn.noLink}
				<LinkButton noLink={true}>{btn.label}</LinkButton>
			{:else}
				<LinkButton href={btn.href} target="_blank">{btn.label}</LinkButton>
			{/if}
		{/each}
	</div>
</div>
