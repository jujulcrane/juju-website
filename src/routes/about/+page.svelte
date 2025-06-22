<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FullImage from '$lib/components/FullImage.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import SectionSep from '$lib/components/SectionSep.svelte';
</script>

<Meta
	title="About Juju"
	description="Learn about Juju, a creative full-stack developer and current student at Cornell University specializing in web development, french horn, and painting."
	keywords="Juju, developer, artist, creative, react, music, web development, Cornell Univeristy"
	url="https://url/about"
/>

<h1 class="h2-style">About Me</h1>
<div class="flex flex-col gap-4 sm:flex-row">
	<LinkButton href="https://as.cornell.edu/" target="_blank">CAS '28</LinkButton>
	<LinkButton noLink={true}>CS + Econ + Japanese</LinkButton>
	<LinkButton href="https://milstein-program.as.cornell.edu/" target="_blank">
		Milstein Scholar
	</LinkButton>
</div>
<div class="flex flex-col lg:mt-4 lg:flex-row lg:gap-4">
	<img
		src="/AboutHeadshot.png"
		alt="Headshot of Juju"
		class={`my-4 w-full rounded-sm object-cover lg:my-0 lg:w-2/3`}
	/>
	<p class="lg:text-lg">
		I am a rising sophomore studying Computer Science, Economics, and Japanese at Cornell
		University, where I'm a Milstein Scholar in the 2028 cohort.<br /><br />Outside of academics, I
		love creating music and playing ice hockey — I've been playing cello and French horn since
		Elementary School, and now I play horn in the Cornell Symphony Orchestra and serve as
		Merchandise Chair. I'm also Vice President of the French Horn Club. I've been on the ice since I
		was three and I currently serve as Vice President of Cornell Club Women's Hockey.<br /><br
		/>Find me building Japanese study tools, developing websites for my project team, making bubble
		tea at UTea, attending orchestra rehearsal, taking slap shots at hockey practice, painting
		family portraits, or writing extensive google reviews!
	</p>
</div>
