<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import SimpleSection from '$lib/components/SimpleSection.svelte';

	const buttons = [
		{ label: "CAS '28", href: 'https://as.cornell.edu/' },
		{ label: 'CS + Econ + Japanese', noLink: true },
		{ label: 'Milstein Scholar', href: 'https://milstein-program.as.cornell.edu/' }
	];

	const galleryImages = [
		{ src: '/hockeySisters.png', alt: 'Juju playing hockey with her sisters' },
		{ src: '/family.png', alt: 'Young Juju with her family' },
		{
			src: '/ConcertFlowers.JPG',
			alt: 'Juju with band director and co-band president after a concert'
		}
	];

	const description = `
    I am a rising sophomore studying Computer Science, Economics, and Japanese at Cornell University, where I'm a Milstein Scholar in the 2028 cohort.<br /><br />
    Outside of academics, I love creating music and playing ice hockey — I've been playing cello and French horn since Elementary School, and now I play horn in the Cornell Symphony Orchestra and serve as Merchandise Chair. I'm also Vice President of the French Horn Club. I've been on the ice since I was three and I currently serve as Vice President of Cornell Club Women's Hockey.<br /><br />
    Find me building Japanese study tools, developing websites for my project team, making bubble tea at UTea, attending orchestra rehearsal, taking slap shots at hockey practice, painting family portraits, or writing extensive google reviews!
  `;
</script>

<Meta
	title="About Juju"
	description="Learn about Juju, a creative full-stack developer and current student at Cornell University specializing in web development, french horn, and painting."
	keywords="Juju, developer, artist, creative, react, music, web development, Cornell Univeristy"
	url="https://url/about"
/>
<SimpleSection
	title="About Me"
	{buttons}
	headshotSrc="/AboutHeadshot.png"
	headshotAlt="Headshot of Juju"
	{description}
	{galleryImages}
/>
