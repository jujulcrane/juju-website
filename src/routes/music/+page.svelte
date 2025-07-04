<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import SimpleSection from '$lib/components/SimpleSection.svelte';

	const buttons = [
		{ label: 'French Horn', noLink: true },
		{ label: 'Cornell Symphony Orchestra', href: 'https://www.cuorchestra.org/' },
		{ label: 'Cornell Horn Club', noLink: true }
	];
	const galleryImages = [
		{
			src: '/images/music/hornSection.png',
			alt: 'Cornell horn section after an orchestra concert'
		},
		{ src: '/images/music/HornStudio.png', alt: 'Cornell Horn club holding their horns' },
		{
			src: '/images/music/BrassSection.png',
			alt: 'Cornell Symphony Orchestra brass section after a concert'
		}
	];
	const description = `
    My musical journey began in first grade with the cello, and truly took flight when I picked up the French horn in fourth grade. The French horn quickly became my passion and opened the door to the world of orchestral music.<br><br>

    <img src="/images/music/HornStore.jpeg" alt="A vibrant display of French horns hanging in a specialty horn shop in Boston" class="my-4 rounded-sm object-cover w-full lg:w-2/3" /><br>

    In eleventh grade, I had the honor of performing with the New York All-State Symphony Orchestra—my first experience playing horn in an orchestra, after years in band. It was a transformative moment, connecting with talented musicians from across the state and discovering the unique magic of symphonic performance.<br>

    <img src="/images/music/NewYorkAllState.JPG" alt="The All-State horn section posing playfully with their horns held above their heads, smiling after the concert" class="my-4 rounded-sm object-cover w-full lg:w-2/3" /><br>

    My senior year brought an unforgettable tour of Italy with the Cayuga Chamber Youth Orchestra, performing in breathtaking venues across Venice, Florence, and Rome.<br>

    <img src="/images/music/Horn in Italy.JPG" alt="Juju holding her French horn beside a fellow violinist in a historic Venetian church after a concert" class="my-4 rounded-sm object-cover w-full lg:w-2/3" /><br>

    Now, I play French horn in the Cornell Symphony Orchestra, where I also serve as Merchandise Chair. In January 2025, I experienced the thrill of touring Boston with the orchestra, performing at the New England Conservatory and building lifelong memories with my section.<br>

    <img src="/images/music/BostonConcert.jpg" alt="Juju and the Cornell horn section, joined by alumni, proudly holding their horns after a Boston performance" class="my-4 rounded-sm object-cover w-full lg:w-2/3" /><br>

    The Cornell Horn Club has been a source of friendship and inspiration, and I’m honored to serve as its Vice President. Music continues to shape my college experience, fueling my creativity and connecting me with an amazing community.
  `;
</script>

<Meta
	title="Music"
	description="Learn about Juju's musical backround on the French Horn and Cello."
	keywords="music portfolio, french horn, Symphony Orchestra, Cornell Univeristy"
	url="https://url/music"
/>

<SimpleSection
	title="My Music"
	{buttons}
	headshotSrc="/images/music/soloHornPic.png"
	headshotAlt="Juju playing Horn at a concert"
	{description}
	{galleryImages}
/>
